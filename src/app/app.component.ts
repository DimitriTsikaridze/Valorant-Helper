import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
})
export class AppComponent {}
