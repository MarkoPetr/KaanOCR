import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OcrService } from '../services/ocr.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab1Page {

  @ViewChild('mozartFrame', { static: false }) mozartFrame!: ElementRef<HTMLIFrameElement>;
  @ViewChild('iframeContainer', { static: false }) iframeContainer!: ElementRef<HTMLDivElement>;

  loading = false;
  ocrText: string = '';

  constructor(private ocrService: OcrService) {}

  async takeScreenshot() {
    this.loading = true;
    try {
      // html2canvas ne može da "pročita" cross-origin iframe, zato koristimo wrapper div
      const canvas = await html2canvas(this.iframeContainer.nativeElement, {
        useCORS: true,
        allowTaint: true,
      });

      const base64 = canvas.toDataURL('image/png');
      this.ocrText = await this.ocrService.recognize(base64);
    } catch (err) {
      console.error('Greška pri OCR:', err);
    } finally {
      this.loading = false;
    }
  }
}
