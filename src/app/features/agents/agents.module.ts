import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentNewsComponent } from './agents-container/agent-news/agent-news.component';
import { AgentsContainerComponent } from './agents-container/agents-container.component';
import { SharedModule } from '../../shared/shared.module';
import { AllAgentsComponent } from './agents-container/all-agents/all-agents.component';

@NgModule({
  declarations: [
    AgentsContainerComponent,
    AgentNewsComponent,
    AllAgentsComponent,
  ],
  imports: [CommonModule, AgentsRoutingModule, SharedModule],
})
export class AgentsModule {}
