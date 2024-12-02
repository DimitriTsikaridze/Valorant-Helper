import { Component, ChangeDetectionStrategy, OnInit, inject, input } from '@angular/core';
import { LineupsService } from '@services/lineups.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { TitleComponent } from '@shared/components';

@Component({
    selector: 'app-map-preview',
    templateUrl: './map-preview.component.html',
    styleUrls: ['./map-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, TitleComponent, UpperCasePipe]
})
export class MapPreviewComponent implements OnInit {
  private lineupsService = inject(LineupsService);
  private route = inject(ActivatedRoute);

  mapUrl = '';
  mapName = input.required<string>();
  siteName = input.required<string>();
  agentName = input.required<string>();

  ngOnInit(): void {
    this.mapUrl = this.lineupsService.getMapImagePath(this.mapName(), 'splash');
  }
}
