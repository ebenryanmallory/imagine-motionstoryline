import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

import { generateImage } from './actions';
import { onChange, state } from '../../store';

const reactiveImage = (newValue: string) => { return /*html*/`
  <img src='${newValue}' class='max-w-full max-h-[calc(100vh-188px-60px)]' />
`};

const setupEventListeners = () => {
  const generateButton = document.querySelector('#generate') as HTMLButtonElement;
  generateButton.addEventListener('click', generateImage);
  const container = document.querySelector('#image-container') as HTMLDivElement;
  onChange('images', (newValue: string[]) => {
    container.innerHTML = reactiveImage(newValue[newValue.length - 1]);
  });
  onChange('currentSlide', (currentSlide: number) => {
    container.innerHTML = reactiveImage(state.images[currentSlide]);
  });
};

export const imageTextInput = () => {
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <div>
    <sl-card class="card-header w-full px-10">
      <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: darkgreen;"></sl-spinner>
      <p>Describe the image you want to generate.</p>
      <sl-input id="prompt" placeholder="Image description prompt" filled></sl-input>
      <br />
      <sl-select id="promptSelect" label="Or start with a preset" size="small" clearable placement="top" value="Fluffy_catbear_in_his_natural_habitat">
        <sl-option value="Fluffy_catbear_in_his_natural_habitat">Fluffy catbear in his natural habitat</sl-option>
        <sl-option value="Fluffy_dragon_cat_photo_by_National_Geographic">Fluffy dragon cat photo by National Geographic</sl-option>
        <sl-option value="White_monkey_parrot_in_African_jungle">White monkey parrot in African jungle</sl-option>
      </sl-select>
      <sl-button id="generate" class="py-2">Generate Image</sl-button>
    </sl-card>
    <div id="image-container" class="w-full px-10 py-3 overflow-hidden mb-2"></div>
    <canvas id="canvas" class="hidden"></canvas>
  </div>
`};