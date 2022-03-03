import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [ngStyle]="{ fontSize: fontSize }">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() fontSize: string = '1rem';
}
