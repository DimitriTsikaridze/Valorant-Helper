import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LineupsService } from '@services/lineups.service';

@Component({
  selector: 'app-agent-lineup-maps',
  templateUrl: './agent-lineup-maps.component.html',
  styleUrls: ['./agent-lineup-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentLineupMapsComponent implements OnInit {
  constructor(
    private lineupsService: LineupsService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {}

  maps$ = this.lineupsService.maps$;

  mockSites = ['A', 'B'];

  agentName: string = this.route.snapshot.params['agentName'];

  ngOnInit() {
    this.title.setTitle(
      `${
        this.agentName.charAt(0).toUpperCase() + this.agentName.slice(1)
      } Lineups`
    );
  }

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }
}
