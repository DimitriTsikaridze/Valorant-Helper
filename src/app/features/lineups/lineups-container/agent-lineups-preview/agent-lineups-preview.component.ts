import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-agent-lineups-preview',
  templateUrl: './agent-lineups-preview.component.html',
  styleUrls: ['./agent-lineups-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentLineupsPreviewComponent {
  @Input() agent!: Agent;
}
