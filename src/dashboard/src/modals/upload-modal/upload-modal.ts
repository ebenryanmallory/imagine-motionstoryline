import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import { state } from '../../../store';
import { login } from './login'

const setupEventListeners = () => {
    const dialog = document.querySelector('.upload-modal') as HTMLElement;
    dialog.show();
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
                    <sl-checkbox checked>Include image</sl-checkbox>
                </div>
                <sl-divider></sl-divider>
            `})}
            ${state.videos.map((video, index) => {
                return /*html*/`
                <p>Videos</p>
                <div class="flex items-center h-[3rem]">
                    <video src='${video}' class="h-[3rem]" autoplay="false"></video>
                    <sl-divider vertical></sl-divider>
                    <p>Video ${index + 1}</p>
                    <sl-divider vertical></sl-divider>
                    <sl-checkbox checked>Include video</sl-checkbox>
                </div>
                <sl-divider></sl-divider>
            `})}
            
        </div>
        <sl-button slot="footer" variant="primary">Upload all</sl-button>
    </sl-dialog>
`}