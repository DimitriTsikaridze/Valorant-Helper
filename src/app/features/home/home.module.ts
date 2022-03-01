import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './container/container.component';
import { IntroductionComponent } from './container/introduction/introduction.component';
import { AgentPreviewComponent } from './container/agent-preview/agent-preview.component';
import { FeaturePreviewComponent } from './container/feature-preview/feature-preview.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ContainerComponent,
    IntroductionComponent,
    AgentPreviewComponent,
    FeaturePreviewComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
