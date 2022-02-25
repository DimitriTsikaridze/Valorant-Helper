import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../../../models/agent.interface';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPreviewComponent {
  constructor() {}
  @Input() agents!: Agent[];
}
