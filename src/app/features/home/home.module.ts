import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

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
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
