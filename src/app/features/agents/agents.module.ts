import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AgentDetailsComponent,
  AgentNewsComponent,
  AgentsContainerComponent,
  AllAgentsComponent,
} from './index';

import { RouterModule, Routes } from '@angular/router';
import {
  AgentCardComponent,
  ButtonComponent,
  LoadingComponent,
  TitleComponent,
} from '@shared/components';

const routes: Routes = [
  { path: '', component: AgentsContainerComponent },
  { path: ':id', component: AgentDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
