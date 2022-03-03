import { Component, OnDestroy, OnInit } from '@angular/core';
import { Agent } from '../../../shared/models/agent.interface';
import { AgentsService } from '../../../services/agents.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  constructor(private agentsService: AgentsService) {}

  private destroy$ = new Subject<void>();

  agents!: Agent[];

  ngOnInit(): void {
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
    } else {
      this.agentsService
        .getAllAgents()
        .pipe(takeUntil(this.destroy$))
        .subscribe((agents: Agent[]) => {
          this.agents = agents;
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete;
  }
}
