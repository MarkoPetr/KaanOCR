import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OcrService } from '../services/ocr.service';

@Component({
  selector: 'app-ocr',
  standalone: true,
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class OcrPage {
  results: string[] = [];
  loading: boolean = false;

  constructor(private ocrService: OcrService) {}

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.loading = true;

    try {
      this.results = await this.ocrService.recognizeImage(file);
    } catch (err) {
      console.error('OCR error:', err);
    }

    this.loading = false;
  }
}
