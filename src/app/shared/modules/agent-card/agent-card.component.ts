import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '@models/agent';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentCardComponent {
  @Input() agent: Agent;
}
