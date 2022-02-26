import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '../../../models/agent.interface';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPreviewComponent {
  constructor() {}
  translateValue = 0;

  @Input() agents!: Agent[];

  onLeft() {
    this.translateValue += 332 * 3;
  }
  onRight() {
    this.translateValue -= 332 * 3;
  }
}
