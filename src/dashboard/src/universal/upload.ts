import '@shoelace-style/shoelace/dist/components/button/button.js';
import { state, onChange } from '../../store';

const setupEventListeners = () => {
  // Code split and load in modal once button is clicked
  const uploadModalButton = document.querySelector('#uploadModalButton') as HTMLElement;
  uploadModalButton.addEventListener('click', async(e: any) => {
    const { uploadModal } = await import('../modals/upload-modal/upload-modal');
    (document.querySelector('#upload-modal-container') as HTMLElement).innerHTML = uploadModal();
  });
  onChange('userID', (newValue: string) => {
    uploadModalButton.innerText = newValue === "" ? 'Log in' : 'Upload';
  });
}

export const upload = () => {
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <div class="flex flex-col">
    <p class="px-3">Upload to Motion Storyline</p>
    <sl-button id="uploadModalButton" class="px-3">${state.userID === "" ? 'Log in' : 'Upload'}</sl-button>
  </div>
  <div id="upload-modal-container"></div>
`};