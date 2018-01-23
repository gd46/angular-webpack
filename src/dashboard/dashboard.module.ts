import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  providers: []
})
export class DashboardModule { }