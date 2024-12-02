import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-error',
  template: `
    <h1>Page Not Found</h1>
    <app-button routerLink="/">Home</app-button>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100%;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        text-align: center;
        padding-block: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, RouterModule],
})
export class ErrorComponent {}
