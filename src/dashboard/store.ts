import { createStore } from "@stencil/store";

export interface State {
  prompts: (string | undefined)[];
  images: (string | undefined)[];
  videos: (ArrayBuffer | undefined)[];
  generationID: (string | undefined)[];
  mainPanel: string;
  currentSlide: number,
  userID: string,
}

const { state, onChange } = createStore<State>({
  prompts: [],
  images: [],
  videos: [],
  generationID: [],
  mainPanel: "image",
  currentSlide: 0,
  userID: ""
});

export function updatePrompts(newPrompt: string) {
  state.prompts = [...state.prompts, newPrompt];
}
export function updateImages(newImageData: string) {
  state.images = [...state.images, newImageData];
}
export function updateVideos(newVideoData: ArrayBuffer) {
  const copiedIDArray = [...state.videos];
  copiedIDArray[state.currentSlide] = newVideoData;
  state.videos = copiedIDArray;
}
export function updateGenerationID(newGenerationID: string) {
  const copiedIDArray = [...state.generationID];
  copiedIDArray[state.currentSlide] = newGenerationID;
  state.generationID = copiedIDArray;
}
export function updateMainPanel(panelState: string) {
  state.mainPanel = panelState;
}
export function updateCurrentSlide(currentSlide: number) {
  state.currentSlide = currentSlide;
}
export function updateUserID(id: string) {
  state.userID = id;
}

export { state, onChange };

/* 
  The current state management in the application lacks a defined structure for associating prompts with their resulting images and videos. 
  Initially, a single array of objects was considered to create a hierarchical relationship under a common parent attribute 
  (such as the creation prompt) where images and videos were clearly linked. The current workflow involves creating 
  an image from a prompt and then a video from that image using the Stability AI API, so linking images (under a prompt) to it's
  corresponding video (under an image) could have made sense, but to maintain flexibility for future versions such as creating 
  videos without reference images this approach seemed constraining.

  Two alternative data structures are options:
  1. A single array of objects, each containing a prompt, image, and video data, with a clear relationship between them.
  2. Separate arrays for images and videos without a direct relationship, only linked conceptually by the UI.

  The current approach uses separate arrays indexed by currentSlide. This allows for loose association by index but results 
  in a less organized and potentially confusing structure that complicates synchronization.

*/