import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  AgentPreviewComponent,
  FeaturePreviewComponent,
  HomeContainerComponent,
  IntroductionComponent,
} from './index';
import {
  AgentCardComponent,
  ButtonComponent,
  TitleComponent,
} from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
];

@NgModule({
  declarations: [
    HomeContainerComponent,
    IntroductionComponent,
    AgentPreviewComponent,
    FeaturePreviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgentCardComponent,
    TitleComponent,
    ButtonComponent,
    RouterModule.forChild(routes),
  ],
})
export default class HomeModule {}
