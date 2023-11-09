import { Routes } from '@angular/router';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentsContainerComponent } from './agents-container/agents-container.component';

const agentsRoutes = [
  { path: '', component: AgentsContainerComponent },
  { path: ':id', component: AgentDetailsComponent },
] as Routes;

export default agentsRoutes;
