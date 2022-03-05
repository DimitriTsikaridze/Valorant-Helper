import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeContainerComponent } from './home-container/home-container.component';
import { AgentPreviewComponent } from './home-container/agent-preview/agent-preview.component';
import { FeaturePreviewComponent } from './home-container/feature-preview/feature-preview.component';
import { IntroductionComponent } from './home-container/introduction/introduction.component';

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
