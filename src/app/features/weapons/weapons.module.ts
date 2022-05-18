import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsRoutingModule } from './weapons-routing.module';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [WeaponsContainerComponent, WeaponDetailsComponent],
  imports: [CommonModule, WeaponsRoutingModule, SharedModule],
})
export class WeaponsModule {}
