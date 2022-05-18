import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';

const routes: Routes = [{ path: '', component: WeaponsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponsRoutingModule {}
