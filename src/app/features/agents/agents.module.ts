import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AgentDetailsComponent,
  AgentNewsComponent,
  AgentsContainerComponent,
  AllAgentsComponent,
} from './index';

import {
  AgentCardComponent,
  ButtonComponent,
  LoadingComponent,
  TitleComponent,
} from '@shared/components';

@NgModule({
  imports: [
    CommonModule,
    AgentCardComponent,
    TitleComponent,
    ButtonComponent,
    LoadingComponent,
    AgentsContainerComponent,
    AgentNewsComponent,
    AllAgentsComponent,
    AgentDetailsComponent,
  ],
})
export default class AgentsModule {}
