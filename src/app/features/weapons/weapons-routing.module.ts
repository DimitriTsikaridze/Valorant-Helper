import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';

const routes: Routes = [
  { path: '', component: WeaponsContainerComponent },
  {
    path: ':weaponName',
    component: WeaponDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponsRoutingModule {}
