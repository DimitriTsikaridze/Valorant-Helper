import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgentCardModule } from '@shared/modules/agent-card/agent-card.module';
import { RouterModule } from '@angular/router';

import {
  AgentPreviewComponent,
  FeaturePreviewComponent,
  HomeContainerComponent,
  IntroductionComponent,
} from './index';

@NgModule({
  declarations: [
    HomeContainerComponent,
    IntroductionComponent,
    AgentPreviewComponent,
    FeaturePreviewComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, AgentCardModule],
})
export class HomeModule {}
