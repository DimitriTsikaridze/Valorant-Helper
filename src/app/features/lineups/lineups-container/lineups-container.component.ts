import { Component } from '@angular/core';
import { AgentsService } from '../../../services/agents.service';
import { Agent } from '../../../shared/models/agent.interface';

@Component({
  selector: 'app-lineups-container',
  templateUrl: './lineups-container.component.html',
  styleUrls: ['./lineups-container.component.scss'],
})
export class LineupsContainerComponent {
  agentRoles = ['all', 'initiator', 'duelist', 'sentinel', 'controller'];

  constructor(private agentsService: AgentsService) {}

  agents!: Agent[];
  tempAgents!: Agent[];

  activeRole = 'all';

  ngOnInit(): void {
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents) => {
        this.agents = agents;
        this.tempAgents = this.agents;
      });
    }
  }

  roleClick(clickedRole: string) {
    this.activeRole = clickedRole;
    if (clickedRole === 'all') {
      this.agents = this.tempAgents;
      return;
    }
    const filteredAgents = this.tempAgents.filter((agent) => {
      const agentRole = agent.role.displayName.toLowerCase();
      return agentRole == clickedRole;
    });
    this.agents = filteredAgents;
  }
}