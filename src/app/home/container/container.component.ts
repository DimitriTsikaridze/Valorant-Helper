import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../../models/agent.interface';
import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private agentsService: AgentsService) {}

  agents$!: Observable<Agent[]>;

  ngOnInit(): void {
    this.agents$ = this.agentsService.getAllAgents();
  }
}
