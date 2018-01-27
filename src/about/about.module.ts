import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ])
  ]
})
export class AboutModule { }