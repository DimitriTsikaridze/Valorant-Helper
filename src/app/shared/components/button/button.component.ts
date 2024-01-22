import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-button',

  template: `
    <button [ngStyle]="{ fontSize: fontSize() }">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  fontSize = input<string>('1rem');
}
