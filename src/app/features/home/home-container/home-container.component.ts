import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Agent } from '@models/agent';
import { AgentsService } from '@services/agents.service';
import { Observable, of } from 'rxjs';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private agentsService: AgentsService,
    private metaService: MetaService
  ) {}

  agents$: Observable<Agent[]>;

  ngOnInit(): void {
    this.generateTags();

    if (this.agentsService.agents.length) {
      this.agents$ = of(this.agentsService.agents);
    } else {
      this.agents$ = this.agentsService.getAllAgents();
    }
  }

  generateTags() {
    this.metaService.generateTags({
      title: 'Valorant Helper',
      image:
        'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper/main/src/assets/readme-images/landing.webp',
      description: 'Find agent lineups, pro player crosshairs',
    });
  }
}
