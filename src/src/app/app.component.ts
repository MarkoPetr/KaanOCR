import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ion-app>
               <ion-content>
                 <app-tab1></app-tab1>
               </ion-content>
             </ion-app>`,
  standalone: true,
  imports: [],
})
export class AppComponent {}
