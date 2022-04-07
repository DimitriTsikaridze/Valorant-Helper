import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LineupsService } from '../../../../services/lineups.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map-preview',
  templateUrl: './map-preview.component.html',
  styleUrls: ['./map-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPreviewComponent implements OnInit {
  constructor(
    private lineupsService: LineupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mapUrl = '';

  navigateBack() {
    const agentName = this.route.snapshot.params['agentName'];
    this.router.navigate(['lineups', agentName]);
  }

  ngOnInit(): void {
    const mapName = this.route.snapshot.params['mapName'];
    this.mapUrl = this.lineupsService.getMapImagePath(mapName, 'splash');
    console.log(this.mapUrl);
  }
}
