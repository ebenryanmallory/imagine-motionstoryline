import { Hono } from 'hono'
import { cors } from 'hono/cors'
import FormData from "form-data";

import { serveStatic } from 'hono/cloudflare-workers'
import { Ai } from '@cloudflare/ai'
// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'

type Bindings = {
	AI: any
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors())

app.use('/static/*', serveStatic({ root: './', manifest }))
app.use('/', serveStatic({ path: './index.html', manifest }))

app.post('/image', async (c) => {
    const body = await c.req.json();
    const prompt = body.prompt ? body.prompt : "fluffy dragon cat";
    const ai = new Ai(c.env.AI);

    const inputs = {
      prompt: prompt,
      num_steps: 20 // "maximum": 20
    };

    const response = await ai.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", inputs);

    return new Response(response, {
        headers: {
            "content-type": "image/png",
        },
    });
})

app.post('/video', async (c) => {

    const body = await c.req.json();
    // @ts-ignore
    const api_key = c.env.STABILITY_API_KEY;
    const base64Image = body.image;
    const data = new FormData();
    function base64ToBlob(base64: string, mimeType: string) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {type: mimeType});
    }
    
    const mimeType = "image/png"; // or jpeg
    const blob = base64ToBlob(base64Image, mimeType);

    data.append("image", blob, "image.png");

    data.append("seed", 0);
    data.append("cfg_scale", 8); //  0 .. 10
    data.append("motion_bucket_id", 50); //  1 .. 255

    const statusResponse = await fetch(`https://api.stability.ai/v2beta/image-to-video`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${api_key}`
        },
        // @ts-ignore
        body: data
    });
    
    if (!statusResponse.ok) {
        console.log(statusResponse.status)
        return {}
    }
    const responseJSON = await statusResponse.json();
    // @ts-ignore
    const generationID = responseJSON.id;
    return new Response(JSON.stringify({ generationID }), {
        headers: {
            "content-type": "application/json",
        },
    });
    
})

app.post('/poll_video', async (c) => {

    const body = await c.req.json();
    const generationID = body.generationID;
    const api_key = c.env.STABILITY_API_KEY;

    // Fetch generated image
    const videoResponse = await fetch(`https://api.stability.ai/v2beta/image-to-video/result/${generationID}`, {
        method: "GET",
        headers: {
        Authorization: `Bearer ${api_key}`,
        Accept: "video/*",
        },
    });
    
    for (let i = 0; i < 10; i++) {
        if (videoResponse.status === 202) {
            console.log("Generation is still running, try again in 10 seconds.");
        } else if (videoResponse.status === 200) {
            console.log("Generation is complete!");
            const arrayBuffer = await videoResponse.arrayBuffer();
            return new Response(arrayBuffer, {
                headers: {
                    "content-type": "video/*",
                },
            });
        } else {
            throw new Error(`Response ${videoResponse.status}: ${videoResponse.toString()}`);
        }
        await sleep(10000);
    }
    return new Response(JSON.stringify("Video still generating"), {
        headers: {
            "content-type": "application/json",
        },
    });
    
})

export default app