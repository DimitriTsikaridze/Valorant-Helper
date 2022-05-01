import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgentsService } from '@services/agents.service';
import { Agent } from '@models/agent';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-agents-container',
  templateUrl: './agents-container.component.html',
  styleUrls: ['./agents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentsContainerComponent implements OnInit {
  constructor(
    private agentsService: AgentsService,
    private titleService: Title
  ) {}

  agents$: Observable<Agent[]>;

  ngOnInit(): void {
    this.titleService.setTitle('Agents');
    if (this.agentsService.agents.length) {
      this.agents$ = of(this.agentsService.agents);
    } else {
      this.agents$ = this.agentsService.getAllAgents();
    }
  }
}
