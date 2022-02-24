import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title: string = 'Default Title';
  @Input() margin: string = '2rem';
  @Input() color: string = 'white';
  @Input() fontSize: string = '2rem';
}
