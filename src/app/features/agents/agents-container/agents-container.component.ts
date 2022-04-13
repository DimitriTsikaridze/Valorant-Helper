import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
})
export class AgentsContainerComponent implements OnInit {
  constructor(
    private agentsService: AgentsService,
    private titleService: Title
  ) {}

  agents!: Agent[];

  ngOnInit(): void {
    this.titleService.setTitle('Agents');
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents: Agent[]) => {
        this.agents = agents;
      });
    }
  }
}
