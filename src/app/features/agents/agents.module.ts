import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentNewsComponent } from './container/agent-news/agent-news.component';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AgentNewsComponent, ContainerComponent],
  imports: [CommonModule, AgentsRoutingModule, SharedModule],
})
export class AgentsModule {}
