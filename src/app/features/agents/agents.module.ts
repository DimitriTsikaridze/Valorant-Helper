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
  declarations: [
    AgentsContainerComponent,
    AgentNewsComponent,
    AllAgentsComponent,
    AgentDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgentCardComponent,
    TitleComponent,
    ButtonComponent,
    LoadingComponent,
  ],
})
export class AgentsModule {}
