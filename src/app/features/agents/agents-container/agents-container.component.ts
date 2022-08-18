import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  constructor(private agentsService: AgentsService) {}

  agents$: Observable<Agent[]>;

  ngOnInit(): void {
    if (this.agentsService.agents.length) {
      this.agents$ = of(this.agentsService.agents);
    } else {
      this.agents$ = this.agentsService.getAllAgents();
    }
  }
}
