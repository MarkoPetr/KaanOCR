import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root',
})
export class OcrService {

  // NOVA osnovna metoda (base64)
  async recognize(base64Image: string): Promise<string> {
    const image = base64Image.startsWith('data:')
      ? base64Image
      : `data:image/png;base64,${base64Image}`;

    const result = await Tesseract.recognize(
      image,
      'eng',
      {
        logger: m => console.log(m),
      }
    );

    return result.data.text;
  }

  // KOMPATIBILNOST sa starim kodom (File / Blob)
  async recognizeImage(file: File | Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const text = await this.recognize(reader.result as string);
          resolve(text);
        } catch (e) {
          reject(e);
        }
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}
