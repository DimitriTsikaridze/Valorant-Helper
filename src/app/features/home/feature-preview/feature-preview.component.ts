import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-feature-preview',
  templateUrl: './feature-preview.component.html',
  styleUrls: ['./feature-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgStyle],
})
export class FeaturePreviewComponent {
  @Input({ required: true }) backgroundColor: string;
  @Input({ required: true }) color: string;
  @Input() descriptionOrder: number;
}
