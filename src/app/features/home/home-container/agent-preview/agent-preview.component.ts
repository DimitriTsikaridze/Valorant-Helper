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
  @Input() agents!: Agent[];
  onAgentClick(pathName: string) {
    this.router.navigate(['agents', pathName]);
  }
}
