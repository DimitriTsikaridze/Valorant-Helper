import { Component, ChangeDetectionStrategy, OnInit, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LineupsService } from '@services/lineups.service';
import { Observable, of } from 'rxjs';
import { Map } from '@shared/models';
import { MetaService } from '@services/meta.service';
import { ToggleSitesDirective } from '../directives/toggle-sites.directive';
import { LoadingComponent, TitleComponent } from '@shared/components';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-agent-lineup-maps',
  templateUrl: './agent-lineup-maps.component.html',
  styleUrls: ['./agent-lineup-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TitleComponent,
    RouterLink,
    ToggleSitesDirective,
    LoadingComponent,
    AsyncPipe,
    NgOptimizedImage,
  ],
})
export class AgentLineupMapsComponent implements OnInit {
  private lineupsService = inject(LineupsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private metaService = inject(MetaService);
  agentName = input.required<string>();

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

  navigateToLineup(mapName: string, siteName: string) {
    this.router.navigate([mapName, siteName], { relativeTo: this.route });
  }

  private generateTags() {
    this.metaService.generateTags({
      title: `${this.agentName()} Lineups`,
      description: `Explore ${this.agentName()} lineups`,
      image:
        'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper/main/src/assets/readme-images/lineups.webp',
    });
  }
}
