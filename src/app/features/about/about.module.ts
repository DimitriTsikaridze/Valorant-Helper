import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './about-container/about-container.component';
@NgModule({
  imports: [CommonModule, AboutRoutingModule, AboutContainerComponent],
})
export default class AboutModule {}
