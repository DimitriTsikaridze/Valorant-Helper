import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentsContainerComponent } from './agents-container/agents-container.component';

const routes: Routes = [
  { path: '', component: AgentsContainerComponent },
  { path: ':id', component: AgentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsRoutingModule {}
