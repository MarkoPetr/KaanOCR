import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OcrService } from '../services/ocr.service';

@Component({
  selector: 'app-ocr',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
})
export class OcrPage {

  results: string = '';
  loading = false;

  constructor(private ocrService: OcrService) {}

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.loading = true;
    try {
      this.results = await this.ocrService.recognizeImage(file);
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }
}
