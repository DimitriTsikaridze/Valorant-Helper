import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../../services/agents.service';
import { Agent } from '../../../shared/models/agent.interface';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
})
export class AgentsContainerComponent implements OnInit {
  constructor(private agentsService: AgentsService) {}

  agents!: Agent[];

  ngOnInit(): void {
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents: Agent[]) => {
        this.agents = agents;
      });
    }
  }
}
