import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 [ngStyle]="{ margin: margin, color: color, fontSize: fontSize }">
      <ng-content></ng-content>
    </h1>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TitleComponent {
  @Input() margin: string = '2rem';
  @Input() color: string = 'white';
  @Input() fontSize: string = '2rem';
}
