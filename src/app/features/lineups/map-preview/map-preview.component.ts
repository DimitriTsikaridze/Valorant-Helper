import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LineupsService } from '@services/lineups.service';
import { ActivatedRoute } from '@angular/router';

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
  mapName = this.route.snapshot.params['mapName'];
  siteName = this.route.snapshot.params['siteName'];
  agentName = this.route.snapshot.params['agentName'];

  ngOnInit(): void {
    this.mapUrl = this.lineupsService.getMapImagePath(this.mapName, 'splash');
  }
}
