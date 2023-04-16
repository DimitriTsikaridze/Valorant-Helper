import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { Agent } from '@models/agent';
import { RouterLink } from '@angular/router';
import { AgentCardComponent } from '../../../shared/components/agent-card/agent-card.component';
import { NgFor, NgClass, UpperCasePipe } from '@angular/common';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-all-agents',
  templateUrl: './all-agents.component.html',
  styleUrls: ['./all-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TitleComponent,
    NgFor,
    NgClass,
    AgentCardComponent,
    RouterLink,
    UpperCasePipe,
  ],
})
export class AllAgentsComponent implements OnChanges {
  @Input() agents: Agent[];

  private tempAgents: Agent[];

  agentRoles = ['all', 'initiator', 'duelist', 'controller', 'sentinel'];
  activeRole = 'all';

  ngOnChanges(): void {
    this.tempAgents = this.agents;
  }

  roleClick(clickedRole: string) {
    this.activeRole = clickedRole;
    if (clickedRole === 'all') {
      this.agents = this.tempAgents;
      return;
    }

    const filteredAgents = this.tempAgents.filter((agent) => {
      const agentRole = agent.role.displayName.toLowerCase();
      return agentRole === clickedRole;
    });
    this.agents = filteredAgents;
  }
}
