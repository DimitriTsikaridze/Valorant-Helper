import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineupsService } from '@services/lineups.service';

@Component({
  selector: 'app-agent-lineup-maps',
  templateUrl: './agent-lineup-maps.component.html',
  styleUrls: ['./agent-lineup-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentLineupMapsComponent {
  constructor(
    private lineupsService: LineupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  maps$ = this.lineupsService.maps$;

  mockSites = ['A', 'B'];

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }
}
