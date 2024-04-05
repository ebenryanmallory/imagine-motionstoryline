import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import { onChange, updateCurrentSlide, state } from '../../store';

declare global {
  interface HTMLElementTagNameMap {
    'SlDialog': HTMLElement & {
      show(): void;
    };
  }
}

const reactiveImage = (newValue: string) => { return /*html*/`
  <sl-carousel-item>
    <img src='${newValue}' class='w-full h-full cursor-pointer' alt="" />
  </sl-carousel-item>
`};

const setupEventListeners = () => {
  const carousel = document.querySelector('.nav-carousel') as HTMLElement;
  const modalImage = document.querySelector('#modal-image') as HTMLElement;
  const dialog = document.querySelector('.dialog-width') as HTMLDialogElement;
  onChange('images', (newValue: string[]) => {
      let imageString = ''
      for (const pngData of newValue) {
        imageString += reactiveImage(pngData);
      }
      carousel.innerHTML = imageString;
      modalImage.innerHTML = reactiveImage(newValue[state.currentSlide]);
      const openTrigger = document.querySelectorAll('.nav-carousel img');
      openTrigger.forEach((img: Element) => img.addEventListener('click', (e) => dialog.show()));
  });
  onChange('currentSlide', (currentSlide: number) => {
    modalImage.innerHTML = reactiveImage(state.images[currentSlide]);
});
  carousel.addEventListener('sl-slide-change', (e: any) => {
    const slideIndex = e.detail.index;
    updateCurrentSlide(slideIndex)
  });
  // modal
  const downloadButton = dialog.querySelector('sl-button[slot="footer"]') as HTMLElement;;
  downloadButton.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = state.images[state.currentSlide];
    downloadLink.download = `generatedImage.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
  });
}

export const navigation = () => { 
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <sl-carousel class="vertical nav-carousel px-3" pagination orientation="vertical" style="--aspect-ratio: 3/2;"></sl-carousel>
  <sl-dialog label="Full Image" class="dialog-width" style="--width: 90vw;">
    <div id="modal-image"></div>
    <sl-button slot="footer" variant="primary">Download image</sl-button>
  </sl-dialog>
  <style>

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
  </style>

`};