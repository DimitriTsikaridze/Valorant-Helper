import { Component, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { FooterComponent, HeaderComponent } from './layout';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header />
    <div class="spacer"></div>
    <router-outlet />
    <app-footer />
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
export class AppComponent {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private renderer2 = inject(Renderer2);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.renderer2.setAttribute(
      this.document.querySelector('app-root'),
      'app-version',
      environment.appVersion
    );
  }
}
