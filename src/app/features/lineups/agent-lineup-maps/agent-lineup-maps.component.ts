import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LineupsService } from '@services/lineups.service';
import { capitalizeFirstletter, routeParams } from '@shared/utils';
import { Observable, of } from 'rxjs';
import { Map } from '@shared/models';
import { MetaService } from '@services/meta.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { ToggleSitesDirective } from '../directives/toggle-sites.directive';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-agent-lineup-maps',
  templateUrl: './agent-lineup-maps.component.html',
  styleUrls: ['./agent-lineup-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TitleComponent,
    RouterLink,
    NgIf,
    NgFor,
    ToggleSitesDirective,
    LoadingComponent,
    AsyncPipe,
  ],
})
export class AgentLineupMapsComponent implements OnInit {
  constructor(
    private lineupsService: LineupsService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private metaService: MetaService
  ) {}

  mockSites = ['A', 'B'];

  maps$: Observable<Map[]>;

  ngOnInit(): void {
    this.generateTags();

    if (this.lineupsService.maps.length) {
      this.maps$ = of(this.lineupsService.maps);
    } else {
      this.maps$ = this.lineupsService.getAllMaps();
    }
  }

  generateTags() {
    const agentName = capitalizeFirstletter(
      routeParams(this.route, 'agentName')
    );

    this.metaService.generateTags({
      title: `${agentName} Lineups`,
      description: `Explore ${agentName} lineups`,
      image:
        'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper/main/src/assets/readme-images/lineups.webp',
    });
  }

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }
}
