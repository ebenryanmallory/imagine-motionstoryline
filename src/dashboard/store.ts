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

  Normal data structure might be arrays of objects, or similar
  [
    {
      prompt: '',
      video: {
        generationID,
      },
      image: {}
    }
  ]
  Or create two separate arrays for videos and images with no direct relationship:
  Image array:
  [
    {
      prompt: '',
      imageData: ''
    }
  ]
  Video array:
  [
    {
      baseImage: '',
      generationID: '',
      videoData: ''
    }
  ]
  However, at the beginning of the project it was not clear if one prompt would be tied to both the video and image, 
  and in the future it still may not make sense to do this. So we have a bunch of disjointed arrays and a currentSlide 
  which is used to index, and create a new entry in each array every time a new prompt is generated so the association 
  still exists based on index. 
  This approach seems less organized, more confusing, and adds difficulty and issues in enforcing syncing. 
  However, I chose this general and flexible data structure approach until I have a better understanding of 
  the project requirements and relationship between prompts, images, and videos.
  I definitely feel like the existing APIs used may allow prompting in the video generation process, and / or I may
  migrate to or use different APIs that allow prompts. At that point I would want some association between prompts
  available to users (it might make sense to use the same prompt used to create the image in the video, and use the 
  video prompt to add information about movement)
*/