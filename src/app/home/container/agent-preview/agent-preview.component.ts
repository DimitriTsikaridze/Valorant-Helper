import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../../../models/agent.interface';
import { AgentsService } from '../../../services/agents.service';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
})
export class AgentPreviewComponent implements OnInit {
  constructor(private agentService: AgentsService) {}
  agents$!: Observable<Agent[]>;
  ngOnInit(): void {
    this.agents$ = this.agentService.getAllAgents();
  }
}
