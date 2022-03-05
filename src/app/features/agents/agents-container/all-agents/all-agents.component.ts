import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-all-agents',
  templateUrl: './all-agents.component.html',
  styleUrls: ['./all-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAgentsComponent {
  @Input() agents!: Agent[];
}
