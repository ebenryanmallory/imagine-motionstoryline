import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import { onChange, updateCurrentSlide } from '../../store';

const reactiveImage = (newValue) => { return /*html*/`
  <sl-carousel-item>
    <img src='${newValue}' class='w-full h-full' alt="" />
  </sl-carousel-item>
`};

const setupEventListeners = () => {
  onChange('images', (newValue: string[]) => {
      const container = document.querySelector('.nav-carousel');
      let imageString = ''
      for (const pngData of newValue) {
        imageString += reactiveImage(pngData);
      }
      container.innerHTML = imageString;
  });
  const carousel = document.querySelector('.nav-carousel');
  carousel.addEventListener('sl-slide-change', (e: any) => {
    const slideIndex = e.detail.index;
    updateCurrentSlide(slideIndex)
  });
}

export const navigation = () => { 
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <sl-carousel class="vertical nav-carousel" pagination orientation="vertical" style="--aspect-ratio: 3/2;"></sl-carousel>
  <style>
  .vertical {
    max-height: 400px;
  }

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