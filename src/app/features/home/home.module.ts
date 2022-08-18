import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  ],
})
export class HomeModule {}
