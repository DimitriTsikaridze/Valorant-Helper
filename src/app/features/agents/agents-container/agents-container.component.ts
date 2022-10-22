import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { Observable, of } from 'rxjs';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentsContainerComponent implements OnInit {
  constructor(
    private agentsService: AgentsService,
    private metaService: MetaService
  ) {}

  agents$: Observable<Agent[]>;

  ngOnInit(): void {
    this.generateTags();
    if (this.agentsService.agents.length) {
      this.agents$ = of(this.agentsService.agents);
    } else {
      this.agents$ = this.agentsService.getAllAgents();
    }
  }

  generateTags() {
    this.metaService.generateTags({
      title: 'Agents',
      image: 'https://images8.alphacoders.com/128/1280131.jpg',
      description: 'Explore agents and their details',
    });
  }
}
