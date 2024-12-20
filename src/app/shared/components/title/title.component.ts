import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 [ngStyle]="{ margin: margin(), color: color(), fontSize: fontSize() }">
      <ng-content></ng-content>
    </h1>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TitleComponent {
  margin = input<string>('2rem');
  color = input<string>('white');
  fontSize = input<string>('2rem');
}
