import { createStore } from "@stencil/store";

interface State {
  images: string[];
  videos: string[];
  generationID: string[];
  mainPanel: string;
  currentSlide: number,
  userID: string,
}

const { state, onChange } = createStore<State>({
  images: [],
  videos: [],
  generationID: [],
  mainPanel: "image",
  currentSlide: 0,
  userID: ""
});

export function updateImages(newImageData: string) {
  state.images = [...state.images, newImageData];
}
export function updateVideos(newVideoData: string) {
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
