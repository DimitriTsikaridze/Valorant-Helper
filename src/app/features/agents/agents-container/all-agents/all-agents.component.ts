import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-all-agents',
  templateUrl: './all-agents.component.html',
  styleUrls: ['./all-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAgentsComponent {
  constructor(private router: Router) {}

  @Input() agents!: Agent[];

  onAgentClick(pathName: string) {
    this.router.navigate(['agents', pathName]);
  }
}
