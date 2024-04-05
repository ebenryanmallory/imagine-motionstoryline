import '@shoelace-style/shoelace/dist/components/button/button.js';

const setupEventListeners = () => {
  // Code split and load in modal once button is clicked
  const uploadModalButton = document.querySelector('#uploadModalButton') as HTMLElement;
  uploadModalButton.addEventListener('click', async(e: any) => {
    const { uploadModal } = await import('../modals/upload-modal/upload-modal');
    (document.querySelector('#upload-modal-container') as HTMLElement).innerHTML = uploadModal();
  });
}

export const upload = () => {
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <div class="flex flex-col">
    <p class="px-3">Upload to Motion Storyline</p>
    <sl-button id="uploadModalButton" class="px-3">Log in</sl-button>
  </div>
  <div id="upload-modal-container"></div>
`};