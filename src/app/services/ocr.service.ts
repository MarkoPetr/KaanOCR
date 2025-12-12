import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor() { }

  async recognizeImage(file: File): Promise<string[]> {
    try {
      const { data: { text } } = await Tesseract.recognize(file, 'eng');
      const lines = text.split('\n').map((l: string) => l.trim()).filter((l: string) => l.length > 0);
      return lines;
    } catch (err) {
      console.error('Tesseract OCR error:', err);
      return [];
    }
  }
}
