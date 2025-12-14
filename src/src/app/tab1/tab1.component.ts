import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1 - Digitalni papir</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <input type="file" accept="image/*" (change)="onFileSelected($event)">
      <div *ngIf="imageSrc">
        <img [src]="imageSrc" style="width:100%; height:auto; object-fit:contain;">
      </div>
    </ion-content>
  `,
})
export class Tab1Component {
  imageSrc: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(input.files[0]);
    }
  }
}
