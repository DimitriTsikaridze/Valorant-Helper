import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './container/container.component';
import { IntroductionComponent } from './container/introduction/introduction.component';


@NgModule({
  declarations: [
    ContainerComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
