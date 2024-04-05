import { state, updateVideos, updateGenerationID } from '../../store';
import { blobUrlToBase64 } from '../universal/global';
  
export const generateVideo = async () => {
    const loader = (document.querySelector('.spinner') as HTMLInputElement);
    loader.classList.remove('hidden');
    const imageBase64 = await blobUrlToBase64(state.images[state.currentSlide]);
    const response = await fetch(`/video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: imageBase64
      })
    })
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    const responseSON = await response.json();
    const generationID = responseSON.generationID;
    updateGenerationID(generationID)
    loader.classList.add('hidden');
}
  
export const pollVideo = async () => {
    const loader = (document.querySelector('.spinner') as HTMLInputElement);
    loader.classList.remove('hidden');
    const generationID = state.generationID[state.currentSlide];
    if (generationID.length < 1) { return console.log('generationID not found')}

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
    const blob = new Blob([arrayBuffer], { type: 'video/*' });
    updateVideos(URL.createObjectURL(blob));
    loader.classList.add('hidden');
}