import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-map-preview',
  templateUrl: './map-preview.component.html',
  styleUrls: ['./map-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPreviewComponent {
  constructor(private location: Location) {}
  navigateBack() {
    this.location.back();
  }
}
