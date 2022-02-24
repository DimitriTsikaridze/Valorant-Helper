import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './container/container.component';
import { IntroductionComponent } from './container/introduction/introduction.component';
import { AgentPreviewComponent } from './container/agent-preview/agent-preview.component';


@NgModule({
  declarations: [
    ContainerComponent,
    IntroductionComponent,
    AgentPreviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
