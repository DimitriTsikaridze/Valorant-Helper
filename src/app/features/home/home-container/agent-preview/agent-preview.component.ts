import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPreviewComponent {
  constructor(private router: Router) {}
  translateValue = 0;

  @Input() agents!: Agent[];

  onLeft() {
    if (this.translateValue == 0) return;
    this.translateValue += 332 * 3;
  }
  onRight() {
    if (this.translateValue == -4980) return;
    this.translateValue -= 332 * 3;
  }

  onAgentClick(pathName: string) {
    this.router.navigate(['agents', pathName]);
  }
}
