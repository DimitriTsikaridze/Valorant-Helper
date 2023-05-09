import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { Observable, of } from 'rxjs';
import { MetaService } from '@services/meta.service';
import { AllAgentsComponent } from '../all-agents/all-agents.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { AgentNewsComponent } from '../agent-news/agent-news.component';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AgentNewsComponent, NgIf, AllAgentsComponent, AsyncPipe],
})
export class AgentsContainerComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);

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
