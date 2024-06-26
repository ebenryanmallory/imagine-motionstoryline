import { Hono } from 'hono'
import { cors } from 'hono/cors'
import FormData from "form-data";

import { sleep, base64ToBlob } from './actions'
import { serveStatic } from 'hono/cloudflare-workers'
import { Ai } from '@cloudflare/ai'
// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'

type Bindings = {
	AI: any,
    IMAGINE_BUCKET: R2Bucket,
    STABILITY_API_KEY: string,
    FIREBASE_API_KEY: string,
    FIREBASE_AUTH_DOMAIN: string,
    FIREBASE_DATABASE_URL: string,
    FIREBASE_PROJECT_ID: string,
    FIREBASE_STORAGE_BUCKET: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors())

app.use('/static/*', serveStatic({ root: './', manifest }))
app.use('/', serveStatic({ path: './index.html', manifest }))

app.get('/bucket', async (c) => {
    const { objects } = await c.env.IMAGINE_BUCKET.list();
    const items = objects.map((obj: { key: any; }) => obj.key);
  
    return c.json(items);
});

app.post('/bucket', async (c) => {

    const body = await c.req.json();
    const base64Images = body.images;
    const base64Videos = body.videos;
    const prompts = body.prompts;
    const userID = body.userID;
    const mimeType = "image/png";

    const uploadPromisesImages = base64Images.map((base64Image: string, index: number) => {
        if (base64Image === null) { return };
        base64Image = base64Image.replace('data:image/png;base64,', '');
        const fileName = `${userID}/images/${prompts[index]}.png`;
        const blob = base64ToBlob(base64Image, mimeType);
        return c.env.IMAGINE_BUCKET.put(fileName, blob);
    });
    const uploadPromisesVideos = base64Videos.map((base64Video: string, index: number) => {
        if (base64Video === null) { return };
        const fileName = `${userID}/videos/${prompts[index]}.mp4`;
        const blob = base64ToBlob(base64Video, "video/*");
        return c.env.IMAGINE_BUCKET.put(fileName, blob);
    });
    const combinedPromises: string[] = [...uploadPromisesImages, ...uploadPromisesVideos];
    const responseArray = await Promise.all(combinedPromises);
    return c.json(responseArray);
});

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
        }
    });
})

app.post('/video', async (c) => {

    const body = await c.req.json();
    // @ts-ignore
    const api_key = c.env.STABILITY_API_KEY;
    let base64Image = body.image;
    base64Image = base64Image.replace('data:image/png;base64,', '');
    const data = new FormData();
    
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
        return;
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

app.get('/firebase-credentials', async (c) => {
    const firebaseConfig = {
        apiKey: c.env.FIREBASE_API_KEY,
        authDomain: c.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: c.env.FIREBASE_DATABASE_URL,
        projectId: c.env.FIREBASE_PROJECT_ID,
        storageBucket: c.env.FIREBASE_STORAGE_BUCKET
    }
    return new Response(JSON.stringify(firebaseConfig), {
        headers: { 'Content-Type': 'application/json' }
    });
});

export default app