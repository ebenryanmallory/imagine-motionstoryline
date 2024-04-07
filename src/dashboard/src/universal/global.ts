
export async function arrayBufferToBase64(arrayBuffer: ArrayBuffer): Promise<string> {
    const bytes = new Uint8Array(arrayBuffer);
    const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binary);
}