import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsRoutingModule } from './weapons-routing.module';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';

@NgModule({
  declarations: [WeaponsContainerComponent],
  imports: [CommonModule, WeaponsRoutingModule],
})
export class WeaponsModule {}
