import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { Observable } from 'rxjs';
import { MetaService } from '@services/meta.service';
import { CommonModule } from '@angular/common';
import { AgentNewsComponent } from '../agent-news/agent-news.component';
import { AgentCardComponent, TitleComponent } from '@shared/components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AgentNewsComponent,
    TitleComponent,
    AgentCardComponent,
    CommonModule,
    RouterLink,
  ],
})
export class AgentsContainerComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);

  agents$: Observable<Agent[]>;

  agentRoles = ['all', 'initiator', 'duelist', 'controller', 'sentinel'];
  activeRole = 'all';

  ngOnInit(): void {
    this.generateTags();
    this.agents$ = this.agentsService.getAllAgents();
  }

  roleClick(clickedRole: string) {
    console.log(clickedRole);
  }

  private generateTags() {
    this.metaService.generateTags({
      title: 'Agents',
      image: 'https://images8.alphacoders.com/128/1280131.jpg',
      description: 'Explore agents and their details',
    });
  }
}
