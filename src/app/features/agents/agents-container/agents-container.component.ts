import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { Observable } from 'rxjs';
import { MetaService } from '@services/meta.service';
import { CommonModule } from '@angular/common';
import { AgentNewsComponent } from '../agent-news/agent-news.component';
import { AgentCardComponent, TitleComponent } from '@shared/components';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgentNewsComponent, TitleComponent, AgentCardComponent, CommonModule, RouterLink],
})
export class AgentsContainerComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);
  private filterRole$ = new BehaviorSubject<string>('');

  agents$: Observable<Agent[]>;

  agentRoles = ['all', 'Initiator', 'Duelist', 'Controller', 'Sentinel'];
  activeRole = 'all';

  ngOnInit(): void {
    this.generateTags();
    this.agents$ = this.filterRole$.pipe(
      switchMap((role) => {
        role = role === 'all' ? '' : role;
        return this.agentsService.getAllAgents().pipe(
          map((agents) => {
            return agents.filter((agent) => agent.role.displayName.includes(role));
          })
        );
      })
    );
  }

  roleClick(role: string) {
    this.activeRole = role;
    this.filterRole$.next(role);
  }

  private generateTags() {
    this.metaService.generateTags({
      title: 'Agents',
      image: 'https://images8.alphacoders.com/128/1280131.jpg',
      description: 'Explore agents and their details',
    });
  }
}
