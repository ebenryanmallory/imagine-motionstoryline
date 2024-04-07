import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { onChange, state } from '../../store';
import { generateVideo, pollVideo } from './actions';

const reactiveVideo = (newValue: string) => { return /*html*/`
  <video src='${newValue}' controls autoplay class='max-w-full max-h-full'></video>
`};

const setupEventListeners = () => {
  const generateButton = document.querySelector('#generate-video') as HTMLElement;
  const pollButton = document.querySelector('#poll-video') as HTMLElement;
  const instructionText = document.querySelector('#instruction_text') as HTMLParagraphElement;
  const container = document.querySelector('#video-container') as HTMLElement;
  (generateButton as HTMLElement).addEventListener('click', generateVideo);
  (pollButton as HTMLElement).addEventListener('click', pollVideo);
  onChange('videos', (updatedVideoList: (ArrayBuffer | undefined)[]) => {
    if (updatedVideoList[state.currentSlide]) {
      const blob = new Blob([updatedVideoList[state.currentSlide]], { type: 'video/*' });
      const videoSrc = URL.createObjectURL(blob);
      container.innerHTML = reactiveVideo(videoSrc);
    }
  });
  onChange('generationID', () => {
    if (state.generationID[state.currentSlide]) {
      generateButton.classList.add('hidden')
      pollButton.classList.remove('hidden')
      instructionText.textContent  = "Videos take a couple of minutes to generate. Check to see if it ready by clicking poll."
    }
  });
  onChange('currentSlide', () => {
    if (state.generationID[state.currentSlide]) {
      generateButton.classList.add('hidden')
      pollButton.classList.remove('hidden')
      instructionText.textContent  = "Videos take a couple of minutes to generate. Check to see if it ready by clicking poll."
    } else {
      generateButton.classList.remove('hidden')
      pollButton.classList.add('hidden')
      instructionText.textContent  = "Click to begin a background render for your selected image."
    }
    if (state.videos[state.currentSlide]) {
      const blob = new Blob([state.videos[state.currentSlide]], { type: 'video/*' });
      const videoSrc = URL.createObjectURL(blob);
      container.innerHTML = reactiveVideo(videoSrc);
    } else {
      container.innerHTML = '';
    }
  });
};

export const videoOptions = () => {
  setTimeout(() => setupEventListeners(), 0);
  return /*html*/`
  <sl-card class="card-header w-full px-10">
    <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: darkgreen;"></sl-spinner>
    <p>Generate video from current image.</p>
    <sl-button id="generate-video" class="py-2 ${state.generationID[state.currentSlide] ? 'hidden' : ''}">Generate Video</sl-button>
    <sl-button id="poll-video" class="py-2 ${state.generationID[state.currentSlide] ? '' : 'hidden'}">Poll Video</sl-button>
    <p id='instruction_text'>Click to begin a background render for your selected image.</p>
  </sl-card>
  <div id="video-container" class="w-full py-3 overflow-hidden mb-2">
    ${state.videos[state.currentSlide] ? reactiveVideo(URL.createObjectURL(new Blob([state.videos[state.currentSlide]], { type: 'video/*' }))) : ''}
  </div>
`};