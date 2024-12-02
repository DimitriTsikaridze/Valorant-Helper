import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-feature-preview',
    templateUrl: './feature-preview.component.html',
    styleUrls: ['./feature-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgStyle]
})
export class FeaturePreviewComponent {
  backgroundColor = input.required<string>();
  color = input.required<string>();
  descriptionOrder = input<number | undefined>();
}
