import { Routes } from '@angular/router';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';

const weaponsRoute = [
  { path: '', component: WeaponsContainerComponent },
  {
    path: ':name',
    component: WeaponDetailsComponent,
  },
] as Routes;

export default weaponsRoute;
