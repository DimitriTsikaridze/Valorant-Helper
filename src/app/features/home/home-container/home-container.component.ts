import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Agent } from '@models/agent';
import { AgentsService } from '@services/agents.service';
import { Observable } from 'rxjs';
import { MetaService } from '@services/meta.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent, TitleComponent } from '@shared/components';
import { FeaturePreviewComponent } from '../feature-preview/feature-preview.component';
import { AgentPreviewComponent } from '../agent-preview/agent-preview.component';
import { AsyncPipe } from '@angular/common';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrls: ['./home-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        IntroductionComponent,
        AgentPreviewComponent,
        FeaturePreviewComponent,
        TitleComponent,
        ButtonComponent,
        RouterLink,
        AsyncPipe,
    ]
})
export class HomeContainerComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);

  agents$: Observable<Agent[]>;

  ngOnInit(): void {
    this.generateTags();
    this.agents$ = this.agentsService.getAllAgents();
  }

  private generateTags() {
    this.metaService.generateTags({
      title: 'Valorant Helper',
      image:
        'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper/main/src/assets/readme-images/landing.webp',
      description: 'Find agent lineups, pro player crosshairs',
    });
  }
}
