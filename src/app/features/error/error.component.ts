import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h1>Page Not Found</h1> `,
  styles: [
    `
      @use '/src/styles/index' as *;
      :host {
        display: block;
        min-height: 100%;
        background-color: black;
      }

      h1 {
        text-align: center;
        padding-block: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {}
