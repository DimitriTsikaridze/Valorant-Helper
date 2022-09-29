import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-crosshairs-container',
  templateUrl: './crosshairs-container.component.html',
  styleUrls: ['./crosshairs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosshairsContainerComponent {
  constructor(private metaService: MetaService) {
    this.metaService.generateTags({
      title: 'Crosshairs',
      description: 'Explore pro player crosshair settings',
      image: 'https://valoranthelper.com.ge/assets/images/crosshair.webp',
    });
  }
}
