import { state, updateVideos, updateGenerationID } from '../../store';

interface GenerateVideoResponse {
  generationID: string;
}

export const generateVideo = async () => {
    if (state.images.length < 1) { return console.log('Please generate an image first.')}
    const loader = (document.querySelector('.spinner') as HTMLInputElement);
    loader.classList.remove('hidden');
    const generateVideoResponse = await fetch(`/video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: state.images[state.currentSlide]
      })
    })
    if (!generateVideoResponse.ok) {
      console.log('Network response was not ok');
    }
    const generateVideoResponseJSON: GenerateVideoResponse = await generateVideoResponse.json();
    const generationID = generateVideoResponseJSON.generationID;
    updateGenerationID(generationID)
    loader.classList.add('hidden');
}
  
export const pollVideo = async () => {
    const loader = (document.querySelector('.spinner') as HTMLInputElement);
    loader.classList.remove('hidden');
    const generationID = state.generationID[state.currentSlide];
    if (!generationID) { return console.log('generationID not found')}

    const response = await fetch(`/poll_video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        generationID: generationID
      })
    })
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    const arrayBuffer = await response.arrayBuffer();
    updateVideos(arrayBuffer);
    loader.classList.add('hidden');
}