import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutContainerComponent {}
