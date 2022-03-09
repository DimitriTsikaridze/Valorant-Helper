import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AgentsService } from '../../../../services/agents.service';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
})
export class AgentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private agentsService: AgentsService,
    private location: Location
  ) {}

  agent$!: Observable<Agent>;

  ngOnInit(): void {
    const pathName = this.route.snapshot.params['id'];
    this.agent$ = this.agentsService.getSingleAgent(pathName);
  }

  navigateBack() {
    this.location.back();
  }
}
