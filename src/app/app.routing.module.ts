import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './components/app.component';
import { RouterModule, Routes } from '@angular/router';
import { PreloadSelectedModulesList } from './preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'dashboard', 
    loadChildren: '../dashboard/dashboard.module#DashboardModule?chunkName=DashboardModule',
    data: {preload: true}
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule?chunkName=AboutModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadSelectedModulesList 
      }
    )
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    },
    PreloadSelectedModulesList
  ]
})
export class AppRoutingModule { }