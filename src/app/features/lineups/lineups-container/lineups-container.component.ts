import { Component, OnInit, inject } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { MetaService } from '@services/meta.service';
import { AgentLineupsPreviewComponent } from '../agent-lineups-preview/agent-lineups-preview.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { LoadingComponent, TitleComponent } from '@shared/components';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

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
  private searchInput$ = new BehaviorSubject<string>('');

  agents$: Observable<Agent[]>;

  ngOnInit(): void {
    this.generateTags();
    this.agents$ = this.searchInput$.pipe(
      switchMap((searchText) => {
        return this.agentsService.getAllAgents().pipe(
          map((agents) => {
            return agents.filter((agent) =>
              agent.displayName.toLowerCase().includes(searchText)
            );
          })
        );
      })
    );
  }

  searchAgent(e: Event) {
    const filterText = (e.target as HTMLInputElement).value;
    this.searchInput$.next(filterText.toLowerCase());
  }

  private generateTags() {
    this.metaService.generateTags({
      title: 'Lineups',
      description: 'Find best lineups for every agent and win games easily',
      image: 'https://valoranthelper.com.ge/assets/images/lineup.webp',
    });
  }
}
