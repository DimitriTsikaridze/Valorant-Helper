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

  ngOnInit(): void {
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents) => {
        this.agents = agents;
      });
    }
  }
}
