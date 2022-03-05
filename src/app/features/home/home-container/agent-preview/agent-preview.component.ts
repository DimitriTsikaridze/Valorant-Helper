import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AgentsService } from '../../../../services/agents.service';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPreviewComponent {
  constructor(private agentsService: AgentsService) {}
  translateValue = 0;
  isVisible = true;

  @Input() agents!: Agent[];

  onLeft() {
    if (this.translateValue == 0) return;
    this.translateValue += 332 * 3;
  }
  onRight() {
    if (this.translateValue == -4980) return;
    this.translateValue -= 332 * 3;
  }

  onAgentClick(agent: Agent) {
    this.agentsService.navigateToAgent(agent.displayName, agent);
  }
}
