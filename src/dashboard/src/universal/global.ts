export async function blobUrlToBase64(blobUrl: string) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]); // Remove the Data URL prefix
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}