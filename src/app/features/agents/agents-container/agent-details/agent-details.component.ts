import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AgentsService } from '../../../../services/agents.service';
import { Ability, Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
})
export class AgentDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private agentsService: AgentsService,
    private location: Location
  ) {}

  agent!: Agent;
  abilityVideo!: string;
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    const pathName = this.route.snapshot.params['id'];
    this.agentsService
      .getSingleAgent(pathName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.agent = data;
        this.abilityVideo = this.agent.abilities[0].displayVideo;
      });
  }

  navigateBack() {
    this.location.back();
  }

  abilityClick(ability: Ability) {
    this.abilityVideo = ability.displayVideo;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
