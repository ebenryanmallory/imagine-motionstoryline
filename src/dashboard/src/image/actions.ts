import { onChange, updateImages, updatePrompts } from '../../store';

const reactiveImage = (newValue: string) => { return /*html*/`
  <img src='${newValue}' class='max-w-full max-h-full' />
`};

export const setupImageChangeListener = () => {
  const container = document.querySelector('#image-container') as HTMLElement;
  onChange('images', (newValue: string[]) => {
        for (const pngData in newValue) {
          container.innerHTML = reactiveImage(pngData);
        }
    });
  };

export async function generateImage() {
    const loader = (document.querySelector('.spinner') as HTMLElement);
    loader.classList.remove('hidden');
    try {
      let prompt = (document.querySelector('#prompt') as HTMLInputElement).value;
      if (!prompt || prompt.length < 1) {
        prompt = (document.querySelector('#promptSelect') as HTMLInputElement).value.replace(/_/g, ' ');
      }
      const response = await fetch(`/image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const blob = await response.blob();
      const croppedData = await cropImage(URL.createObjectURL(blob));
      updateImages(croppedData);
      updatePrompts(prompt);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Something has gone wrong. Please try again.');
    }
    loader.classList.add('hidden');
}

async function cropImage(blobURL: string, outputWidth: number = 768, outputHeight: number = 768): Promise<string> {
    try {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      if (!canvas) throw new Error('Canvas element not found');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Unable to get canvas context');
  
      canvas.width = outputWidth;
      canvas.height = outputHeight;
  
      const image = new Image();
      image.src = blobURL;
  
      const croppedImageData = await new Promise<string>((resolve, reject) => {
        image.onload = () => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL();
          resolve(dataURL);
        };
        image.onerror = () => reject(new Error('Image loading error'));
      });
  
      return croppedImageData;
    } catch (error) {
      console.error('Error cropping image:', error);
      throw error;
    }
}