import { Component } from '@angular/core';

@Component({
  selector: 'about-company',
  template: `
  <h3>About Company</h3>
  <a routerLink="/about" routerLinkActive="active">About</a>
  `
})
export class AboutCompanyComponent { }