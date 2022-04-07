import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LineupsService } from '../../../../services/lineups.service';
import { Map } from './maps.model';

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
    private route: ActivatedRoute
  ) {}

  maps$!: Observable<Map[]>;

  mockSites = ['A', 'B'];

  ngOnInit(): void {
    this.maps$ = this.lineupsService.getMapsData();
  }

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }
}
