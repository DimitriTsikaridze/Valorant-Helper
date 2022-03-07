import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Agent } from '../../models/agent.interface';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentCardComponent {
  @Input() agent!: Agent;
}
