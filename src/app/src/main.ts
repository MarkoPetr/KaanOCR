import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideIonic } from '@ionic/angular';

bootstrapApplication(AppComponent, {
  providers: [provideIonic()]
}).catch(err => console.error(err));
