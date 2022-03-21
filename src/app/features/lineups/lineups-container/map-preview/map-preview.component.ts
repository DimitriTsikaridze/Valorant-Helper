import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-map-preview',
  templateUrl: './map-preview.component.html',
  styleUrls: ['./map-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
