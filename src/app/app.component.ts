import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  Renderer2,
  inject,
  DOCUMENT,
} from '@angular/core';
import { FooterComponent, HeaderComponent } from './layout';
import { RouterOutlet } from '@angular/router';
import { isPlatformServer } from '@angular/common';
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
        height: 91px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private document = inject(DOCUMENT);
  private renderer2 = inject(Renderer2);

  constructor() {
    if (isPlatformServer(inject(PLATFORM_ID))) return;
    this.renderer2.setAttribute(
      this.document.querySelector('app-root'),
      'app-version',
      environment.appVersion
    );
  }
}
