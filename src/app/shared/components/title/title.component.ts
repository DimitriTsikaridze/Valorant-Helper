import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: ` <div>
    <h1 [ngStyle]="{ margin: margin, color: color, fontSize: fontSize }">
      <ng-content></ng-content>
    </h1>
  </div>`,
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() margin: string = '2rem';
  @Input() color: string = 'white';
  @Input() fontSize: string = '2rem';
}
