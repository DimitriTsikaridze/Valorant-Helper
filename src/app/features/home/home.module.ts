import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AgentCardModule } from '@shared/modules/agent-card/agent-card.module';

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
  imports: [CommonModule, HomeRoutingModule, SharedModule, AgentCardModule],
})
export class HomeModule {}
