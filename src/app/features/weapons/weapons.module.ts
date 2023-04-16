import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsRoutingModule } from './weapons-routing.module';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';
import { LoadingComponent, TitleComponent } from '@shared/components';

@NgModule({
  imports: [
    CommonModule,
    WeaponsRoutingModule,
    TitleComponent,
    LoadingComponent,
    WeaponsContainerComponent,
    WeaponDetailsComponent,
  ],
})
export default class WeaponsModule {}
