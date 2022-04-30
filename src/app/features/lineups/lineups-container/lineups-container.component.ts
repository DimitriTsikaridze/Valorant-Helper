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
  constructor(
    private agentsService: AgentsService,
    private titleService: Title
  ) {}

  agents: Agent[];
  filteredAgents: Agent[];

  ngOnInit(): void {
    this.titleService.setTitle('Lineups');
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
      this.filteredAgents = this.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents) => {
        this.agents = agents;
        this.filteredAgents = this.agents;
      });
    }
  }

  searchAgent(e: any) {
    const filterText = e.target.value;
    this.filteredAgents = this.agents.filter((v) =>
      v.displayName.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
