import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { onChange, state } from '../../store';
import { generateVideo, pollVideo } from './actions';

const reactiveVideo = (newValue: string) => { return /*html*/`
  <video src='${newValue}' controls autoplay class='max-w-full max-h-full'></video>
`};

const setupEventListeners = () => {
  const generateButton = document.querySelector('#generate-video');
  (generateButton as HTMLElement).addEventListener('click', generateVideo);
  const pollButton = document.querySelector('#poll-video');
  (pollButton as HTMLElement).addEventListener('click', pollVideo);
  onChange('videos', (newValue: string[], oldValue: string[]) => {
    const container = document.querySelector('#video-container') as HTMLElement;
    container.innerHTML = reactiveVideo(newValue[state.currentSlide]);
  });
  onChange('generationID', (newValue: string[], oldValue: string[]) => {
    const generateButton = document.querySelector('#generate-video') as HTMLElement;
    const pollButton = document.querySelector('#poll-video') as HTMLElement;
    const helerText = document.querySelector('#helper_text') as HTMLParagraphElement;
    if (state.generationID[state.currentSlide]) {
      generateButton.classList.add('hidden')
      pollButton.classList.remove('hidden')
      helerText.innerText = "Videos take a couple of minutes to generate. Check to see if it ready by clicking poll."
    }
  });
};

export const videoOptions = () => {
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <sl-card class="card-header w-full px-10">
    <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: darkgreen;"></sl-spinner>
    <p>Generate video from current image.</p>
    <sl-button id="generate-video" class="py-2">Generate Video</sl-button>
    <sl-button id="poll-video" class="py-2 hidden">Poll Video</sl-button>
    <p id='helper_text'>Click to begin a background render for your selected image.</p>
  </sl-card>
  <div id="video-container" class="w-full py-3 overflow-hidden mb-2">
    ${state.videos[state.currentSlide] && reactiveVideo(state.videos[state.currentSlide])}
  </div>
`};