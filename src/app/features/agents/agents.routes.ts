import { Routes } from '@angular/router';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentsContainerComponent } from './agents-container/agents-container.component';
import { inject } from '@angular/core';
import { AgentsService } from '@services/agents.service';

const agentsRoutes = [
  {
    path: '',
    component: AgentsContainerComponent,
    resolve: { newAgent: () => inject(AgentsService).getNewAgent() },
  },
  { path: ':id', component: AgentDetailsComponent },
] as Routes;

export default agentsRoutes;
