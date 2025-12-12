import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root',
})
export class OcrService {
  constructor() {}

  async recognizeImage(file: File): Promise<string[]> {
    const result = await Tesseract.recognize(file, 'eng');
    const extracted = result.data.text;

    const lines = extracted
      .split('\n')
      .map((l: string) => l.trim())
      .filter((l: string) => l.length > 0);

    return lines;
  }
}
