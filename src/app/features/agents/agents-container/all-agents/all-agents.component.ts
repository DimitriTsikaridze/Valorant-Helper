import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AgentsService } from '../../../../services/agents.service';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-all-agents',
  templateUrl: './all-agents.component.html',
  styleUrls: ['./all-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAgentsComponent {
  constructor(private agentsService: AgentsService) {}

  @Input() agents!: Agent[];

  onAgentClick(agent: Agent) {
    this.agentsService.navigateToAgent(agent.displayName, agent);
  }
}
