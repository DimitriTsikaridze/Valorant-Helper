import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
})
export class AgentDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  agent!: Agent;

  ngOnInit(): void {
    this.agent = history.state.agent;
    if (this.agent == undefined) {
      this.router.navigate(['agents']);
    }
  }
}
