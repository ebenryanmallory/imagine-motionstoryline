import { state, updateVideos, updateGenerationID } from '../../store';

export async function blobUrlToBase64(blobUrl) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]); // Remove the Data URL prefix
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
  }
  
export const generateVideo = async () => {
    document.querySelector('.spinner').classList.remove('hidden');
    const imageBase64 = await blobUrlToBase64(state.images[state.currentSlide]);
    const url = "https://imagine.motionstoryline.com/video";
    const response = await fetch(url, {
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
    document.querySelector('.spinner').classList.add('hidden');
}
  
export const pollVideo = async () => {
    document.querySelector('.spinner').classList.remove('hidden');
    const generationID = state.generationID[state.currentSlide];
    if (generationID.length < 1) { return console.log('generationID not found')}
    const url = "https://imagine.motionstoryline.com/poll_video";
    const response = await fetch(url, {
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
    document.querySelector('.spinner').classList.add('hidden');
}