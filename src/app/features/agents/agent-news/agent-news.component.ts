import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgentsService } from '@services/agents.service';

@Component({
  selector: 'app-agent-news',
  templateUrl: './agent-news.component.html',
  styleUrls: ['./agent-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentNewsComponent {
  constructor(private agentsService: AgentsService) {}

  newAgent$ = this.agentsService.getNewAgent();
}
