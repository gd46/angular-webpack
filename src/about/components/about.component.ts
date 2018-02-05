import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
  <h3>About</h3>
  <a routerLink="/about/company" routerLinkActive="active">About Company</a>
  `
})
export class AboutComponent { }