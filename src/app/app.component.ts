import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="spacer"></div>
    <router-outlet (activate)="onRoute()"></router-outlet>
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
export class AppComponent {
  onRoute() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
