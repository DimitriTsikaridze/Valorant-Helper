import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LineupsService } from '@services/lineups.service';
import { ActivatedRoute } from '@angular/router';
import { routeParams } from '@shared/utils';

@Component({
  selector: 'app-map-preview',
  templateUrl: './map-preview.component.html',
  styleUrls: ['./map-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPreviewComponent implements OnInit {
  constructor(
    private lineupsService: LineupsService,
    private route: ActivatedRoute
  ) {}

  mapUrl = '';
  mapName = routeParams(this.route, 'mapName');
  siteName = routeParams(this.route, 'siteName');
  agentName = routeParams(this.route, 'agentName');

  ngOnInit(): void {
    this.mapUrl = this.lineupsService.getMapImagePath(this.mapName, 'splash');
  }
}
