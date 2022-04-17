import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgentCardModule } from '@shared/modules/agent-card/agent-card.module';

import {
  AgentDetailsComponent,
  AgentNewsComponent,
  AgentsContainerComponent,
  AllAgentsComponent,
} from './index';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AgentsContainerComponent },
  { path: ':id', component: AgentDetailsComponent },
];

@NgModule({
  declarations: [
    AgentsContainerComponent,
    AgentNewsComponent,
    AllAgentsComponent,
    AgentDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgentCardModule,
  ],
})
export class AgentsModule {}
