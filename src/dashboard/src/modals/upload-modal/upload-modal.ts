import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import { blobUrlToBase64 } from '../../universal/global';
import { state } from '../../../store';
import { login } from './login'

const setupEventListeners = () => {
    const dialog = document.querySelector('.upload-modal') as HTMLElement;
    dialog.show();
    const uploadAllButton = document.querySelector('#uploadAllButton') as HTMLElement;
    uploadAllButton.addEventListener('click', async (e: any) => {
        if (state.images.length < 1) { return };
        const checkboxes = document.querySelectorAll('.image-checkbox') as NodeListOf<HTMLInputElement>;
        const selectedImages = Array.from(checkboxes).map((checkbox, index) => checkbox.checked ? state.images[index] : '');
        const selectedVideos = Array.from(checkboxes).map((checkbox, index) => checkbox.checked ? state.videos[index] : '');
        const selectedPrompts = Array.from(checkboxes).map((checkbox, index) => checkbox.checked ? state.prompts[index] : '');
        async function convertImagesToBase64(images: string[]) {
            const base64Promises = images.map(blobUrl => blobUrlToBase64(blobUrl));
            return await Promise.all(base64Promises);
        }
        async function convertVideosToBase64(videos: string[]) {
            const base64Promises = videos.map(blobUrl => blobUrlToBase64(blobUrl));
            return await Promise.all(base64Promises);
        }
        const [base64Images, base64Videos] = await Promise.all([
            convertImagesToBase64(selectedImages.filter(image => image !== '') as string[]),
            convertVideosToBase64(selectedVideos.filter(video => video !== '') as string[])
        ]);
        if (selectedPrompts.length !== base64Images.length) { return console.log('Length mismatch') };

        const bucketResponse = await fetch('/bucket', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                images: base64Images,
                videos: base64Videos,
                userID: state.userID,
                prompts: selectedPrompts
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
            ${state.images.map((image, index) => {
                return /*html*/`
                <p>Images</p>
                <div class="flex items-center h-[3rem]">
                    <img src='${image}' class="h-[3rem]" />
                    <sl-divider vertical></sl-divider>
                    <p>Image ${index + 1}</p>
                    <sl-divider vertical></sl-divider>
                    <sl-checkbox checked class="image-checkbox">Include image</sl-checkbox>
                </div>
                <sl-divider></sl-divider>
            `})}
            ${state.videos.map((video, index) => {
                return /*html*/`
                <p>Videos</p>
                <div class="flex items-center h-[3rem] video-container">
                    <video src='${video}' class="h-[3rem]" autoplay="false"></video>
                    <sl-divider vertical></sl-divider>
                    <p>Video ${index + 1}</p>
                    <sl-divider vertical></sl-divider>
                    <sl-checkbox checked>Include video</sl-checkbox>
                </div>
                <sl-divider></sl-divider>
            `})}
        </div>
        <sl-button id="uploadAllButton" slot="footer" variant="primary" ${state.userID === "" ? 'disabled' : ''}>Upload all</sl-button>
    </sl-dialog>
`}