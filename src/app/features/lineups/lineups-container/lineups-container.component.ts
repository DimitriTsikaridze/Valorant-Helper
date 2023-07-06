import { Component, OnInit, inject } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { MetaService } from '@services/meta.service';
import { AgentLineupsPreviewComponent } from '../agent-lineups-preview/agent-lineups-preview.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { LoadingComponent, TitleComponent } from '@shared/components';
import { Observable, of, tap } from 'rxjs';

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
    AsyncPipe,
  ],
})
export class LineupsContainerComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);

  private agents: Agent[];
  filteredAgents$: Observable<Agent[]>;

  ngOnInit(): void {
    this.generateTags();
    this.filteredAgents$ = this.agentsService
      .getAllAgents()
      .pipe(tap((agents) => (this.agents = agents)));
  }

  searchAgent(e: Event) {
    const filterText = (e.target as HTMLInputElement).value;
    const filteredAgents = this.agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(filterText.toLowerCase())
    );
    this.filteredAgents$ = of(filteredAgents);
  }

  generateTags() {
    this.metaService.generateTags({
      title: 'Lineups',
      description: 'Find best lineups for every agent and win games easily',
      image: 'https://valoranthelper.com.ge/assets/images/lineup.webp',
    });
  }
}
