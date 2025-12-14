import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tab1Page } from './tab1/tab1.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, Tab1Page],
  template: '<app-tab1></app-tab1>',
})
export class AppComponent {}
