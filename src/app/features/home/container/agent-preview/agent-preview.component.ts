import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '../../../../models/agent.interface';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPreviewComponent {
  constructor() {}
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
}
