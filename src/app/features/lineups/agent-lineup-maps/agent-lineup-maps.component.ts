import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LineupsService } from '@services/lineups.service';
import { capitalizeFirstletter } from '@shared/utils/capitalizeFirstLetter';
import { Observable, of } from 'rxjs';
import { Map } from '../../../shared/models/map';

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

  mockSites = ['A', 'B'];

  maps$: Observable<Map[]>;

  ngOnInit(): void {
    const agentName = this.route.snapshot.paramMap.get('agentName') as string;
    this.title.setTitle(`${capitalizeFirstletter(agentName)} lineups`);

    if (this.lineupsService.maps.length) {
      this.maps$ = of(this.lineupsService.maps);
    } else {
      this.maps$ = this.lineupsService.getAllMaps();
    }
  }

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }
}
