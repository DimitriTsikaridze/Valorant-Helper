import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '@models/agent';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPreviewComponent {
  @Input() agents!: Agent[];
}
