import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crosshairs-container',
  templateUrl: './crosshairs-container.component.html',
  styleUrls: ['./crosshairs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosshairsContainerComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Crosshairs');
  }
}
