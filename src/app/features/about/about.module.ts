import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './about-container/about-container.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AboutContainerComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
