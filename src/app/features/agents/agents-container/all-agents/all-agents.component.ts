import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-all-agents',
  templateUrl: './all-agents.component.html',
  styleUrls: ['./all-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAgentsComponent implements OnInit, OnChanges {
  constructor(private router: Router) {}

  @Input() agents!: Agent[];
  tempAgents!: Agent[];
  agentRoles = ['all', 'initiator', 'duelist', 'sentinel', 'controller'];
  activeRole!: string;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngOnChanges(): void {
    this.tempAgents = this.agents;
  }

  onAgentClick(pathName: string) {
    this.router.navigate(['agents', pathName]);
  }

  roleClick(clickedRole: string) {
    this.activeRole = clickedRole;
    if (clickedRole === 'all') {
      this.agents = this.tempAgents;
      return;
    }
    const filteredAgents = this.tempAgents.filter((agent) => {
      const agentRole = agent.role.displayName.toLowerCase();
      return agentRole == clickedRole;
    });
    this.agents = filteredAgents;
  }
}
