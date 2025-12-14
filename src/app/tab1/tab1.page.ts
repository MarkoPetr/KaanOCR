import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab1Page {

  screenshotData: string | null = null;

  async pickScreenshot() {
    try {
      const photo = await Camera.getPhoto({
        source: CameraSource.Photos,
        resultType: CameraResultType.DataUrl
      });

      if (photo.dataUrl) {
        this.screenshotData = photo.dataUrl;
      } else {
        this.screenshotData = null;
      }

    } catch (e) {
      console.error('Greška pri izboru screenshota', e);
      this.screenshotData = null;
    }
  }
}
