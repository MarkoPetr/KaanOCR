import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/tab1', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
