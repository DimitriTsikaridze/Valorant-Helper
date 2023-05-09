import { Component, OnInit, inject } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { MetaService } from '@services/meta.service';
import { AgentLineupsPreviewComponent } from '../agent-lineups-preview/agent-lineups-preview.component';
import { NgIf, NgFor } from '@angular/common';
import { LoadingComponent, TitleComponent } from '@shared/components';

@Component({
  selector: 'app-lineups-container',
  templateUrl: './lineups-container.component.html',
  styleUrls: ['./lineups-container.component.scss'],
  standalone: true,
  imports: [
    TitleComponent,
    NgIf,
    NgFor,
    AgentLineupsPreviewComponent,
    LoadingComponent,
  ],
})
export class LineupsContainerComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);

  agents: Agent[];
  filteredAgents: Agent[];

  ngOnInit(): void {
    this.generateTags();

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

  searchAgent(e: Event) {
    const filterText = (e.target as HTMLInputElement).value;
    this.filteredAgents = this.agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  generateTags() {
    this.metaService.generateTags({
      title: 'Lineups',
      description: 'Find best lineups for every agent and win games easily',
      image: 'https://valoranthelper.com.ge/assets/images/lineup.webp',
    });
  }
}
