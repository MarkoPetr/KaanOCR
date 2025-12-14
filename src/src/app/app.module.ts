import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1.component';

@NgModule({
  declarations: [AppComponent, Tab1Component],
  imports: [BrowserModule, IonicModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
