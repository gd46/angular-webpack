import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about.component';
import { AboutCompanyComponent } from './components/about-company.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    AboutCompanyComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'company',
        component: AboutCompanyComponent
      }
    ])
  ]
})
export class AboutModule { }