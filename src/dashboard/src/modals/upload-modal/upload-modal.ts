import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import { arrayBufferToBase64 } from '../../universal/global';
import { state } from '../../../store';
import { login } from './login'

const setupEventListeners = () => {
    const dialog = document.querySelector('.upload-modal') as HTMLElement;
    // @ts-ignore -- Shoelace method
    dialog.show();
    const uploadAllButton = document.querySelector('#uploadAllButton') as HTMLElement;
    uploadAllButton.addEventListener('click', async (e: MouseEvent) => {
        if (state.images.length < 1) { return };
        const imageCheckboxes = document.querySelectorAll('.image-checkbox') as NodeListOf<HTMLInputElement>;
        const videoCheckboxes = document.querySelectorAll('.video-checkbox') as NodeListOf<HTMLInputElement>;
        // Filter out non checked assets
        const selectedImages = state.images.map((image, index) => 
            imageCheckboxes[index]?.checked ? image : undefined
        );
        const selectedVideos = state.videos.map((video, index) => 
            videoCheckboxes[index]?.checked ? video : undefined
        );
        const base64Videos = await Promise.all(
            selectedVideos.map(item => 
                item instanceof ArrayBuffer ? arrayBufferToBase64(item) : Promise.resolve(item)
            )
        );

        const bucketResponse = await fetch('/bucket', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                images: selectedImages,
                videos: base64Videos,
                userID: state.userID,
                prompts: state.prompts
            })
        });
        if (!bucketResponse.ok) {
            const responseJson = await bucketResponse.json();
            console.log('Upload successful', responseJson);
        } else {
            console.error('Upload failed', await bucketResponse.text());
        }
    });
}

export const uploadModal = () => { 
    setTimeout(() => setupEventListeners(), 0);
    return /*html*/`

    <sl-dialog label="Upload Assets to Motion Storyline" class="upload-modal" style="--width: 70vw; --sl-panel-background-color: #F2F1EF;">
        ${login()}
        <div id="assets-container">
            <p>Images</p>
            <sl-divider></sl-divider>
            ${state.images.map((image, index) => {
                return /*html*/`
                <div class="flex items-center h-[3rem]">
                    <img src='${image}' class="h-[3rem]" />
                    <sl-divider vertical></sl-divider>
                    <p>Image ${index + 1}</p>
                    <sl-divider vertical></sl-divider>
                    <sl-checkbox checked class="image-checkbox">Include image</sl-checkbox>
                </div>
                <sl-divider></sl-divider>
            `})}
            <p>Videos</p>
            <sl-divider></sl-divider>
            ${state.videos.map((video, index) => {
                return /*html*/`
                <div class="flex items-center h-[3rem] video-container">
                    <video src='${video && URL.createObjectURL(new Blob([video], { type: 'video/*' }))}' class="h-[3rem]" autoplay="false"></video>
                    <sl-divider vertical></sl-divider>
                    <p>Video ${index + 1}</p>
                    <sl-divider vertical></sl-divider>
                    <sl-checkbox checked class="video-checkbox">Include video</sl-checkbox>
                </div>
                <sl-divider></sl-divider>
            `})}
        </div>
        <sl-button id="uploadAllButton" slot="footer" variant="primary" ${state.userID === "" ? 'disabled' : ''}>Upload all</sl-button>
    </sl-dialog>
`}