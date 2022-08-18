import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LineupsService } from '@services/lineups.service';
import { capitalizeFirstletter } from '@shared/utils/capitalizeFirstLetter';

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

  ngOnInit(): void {
    const agentName = this.route.snapshot.paramMap.get('agentName') as string;
    this.title.setTitle(`${capitalizeFirstletter(agentName)} lineups`);
  }

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }
}
