import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosshairsRoutingModule } from './crosshairs-routing.module';
import { CrosshairsContainerComponent } from './crosshairs-container/crosshairs-container.component';

@NgModule({
  imports: [
    CommonModule,
    CrosshairsRoutingModule,
    CrosshairsContainerComponent,
  ],
})
export default class CrosshairsModule {}
