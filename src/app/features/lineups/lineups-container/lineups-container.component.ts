import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';

@Component({
  selector: 'app-lineups-container',
  templateUrl: './lineups-container.component.html',
  styleUrls: ['./lineups-container.component.scss'],
})
export class LineupsContainerComponent implements OnInit {
  agentRoles = ['all', 'initiator', 'duelist', 'sentinel', 'controller'];

  constructor(
    private agentsService: AgentsService,
    private titleService: Title
  ) {}

  agents!: Agent[];
  tempAgents!: Agent[];
  filteredAgents!: Agent[];

  activeRole = 'all';

  ngOnInit(): void {
    this.titleService.setTitle('Lineups');
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
      this.tempAgents = this.agents;
      this.filteredAgents = this.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents) => {
        this.agents = agents;
        this.tempAgents = this.agents;
        this.filteredAgents = this.agents;
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

  searchAgent(e: any) {
    const filterText = e.target.value;
    this.filteredAgents = this.agents.filter((v) =>
      v.displayName.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
