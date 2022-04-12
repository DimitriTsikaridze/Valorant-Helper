import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosshairsRoutingModule } from './crosshairs-routing.module';
import { CrosshairsContainerComponent } from './crosshairs-container/crosshairs-container.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CrosshairsContainerComponent],
  imports: [CommonModule, CrosshairsRoutingModule, SharedModule],
})
export class CrosshairsModule {}
