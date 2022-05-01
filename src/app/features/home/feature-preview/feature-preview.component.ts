import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-preview',
  templateUrl: './feature-preview.component.html',
  styleUrls: ['./feature-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePreviewComponent {
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() descriptionOrder: number;
}
