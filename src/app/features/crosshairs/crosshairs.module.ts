import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosshairsRoutingModule } from './crosshairs-routing.module';
import { CrosshairsContainerComponent } from './crosshairs-container/crosshairs-container.component';

@NgModule({
  declarations: [CrosshairsContainerComponent],
  imports: [CommonModule, CrosshairsRoutingModule],
})
export default class CrosshairsModule {}
