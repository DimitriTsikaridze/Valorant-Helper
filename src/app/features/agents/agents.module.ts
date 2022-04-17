import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgentsRoutingModule } from './agents-routing.module';

import {
  AgentDetailsComponent,
  AgentNewsComponent,
  AgentsContainerComponent,
  AllAgentsComponent,
} from './index';

@NgModule({
  declarations: [
    AgentsContainerComponent,
    AgentNewsComponent,
    AllAgentsComponent,
    AgentDetailsComponent,
  ],
  imports: [CommonModule, AgentsRoutingModule, SharedModule],
})
export class AgentsModule {}
