import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  async openMozzart() {
    await Browser.open({
      url: 'https://www.mozzartbet.com/sr/rezultati?events=finished',
      presentationStyle: 'fullscreen'
    });
  }

}
