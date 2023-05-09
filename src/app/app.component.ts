import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <div class="spacer"></div>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .spacer {
        height: 92px;
      }
    `,
  ],

  standalone: true,
})
export class AppComponent {}
