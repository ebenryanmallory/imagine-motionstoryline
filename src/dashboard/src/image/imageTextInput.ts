import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

import { generateImage } from './actions';
import { onChange, state } from '../../store';

const reactiveImage = (newValue: string) => { return /*html*/`
  <img src='${newValue}' class='max-w-full max-h-[calc(100vh-188px-60px)]' />
`};

export const imageTextInput = () => {
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <div>
    <sl-card class="card-header w-full px-10">
      <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: green;"></sl-spinner>
      <p>Describe the image you want to generate.</p>
      <sl-input id="prompt" placeholder="Image description prompt" filled></sl-input>
      <sl-button id="generate" class="py-2">Generate Image</sl-button>
    </sl-card>
    <div id="image-container" class="w-full px-10 py-3"></div>
    <canvas id="canvas" class="hidden"></canvas>
  </div>
`};

const setupEventListeners = () => {
  const generateButton = document.querySelector('#generate');
  generateButton.addEventListener('click', generateImage);
  const container = document.querySelector('#image-container');
  onChange('images', (newValue: string[]) => {
    container.innerHTML = reactiveImage(newValue[newValue.length - 1]);
  });
  onChange('currentSlide', (currentSlide: number) => {
    container.innerHTML = reactiveImage(state.images[currentSlide]);
  });
};