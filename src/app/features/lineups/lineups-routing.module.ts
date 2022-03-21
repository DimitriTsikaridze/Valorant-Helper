import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupsContainerComponent } from './lineups-container/lineups-container.component';

const routes: Routes = [{ path: '', component: LineupsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineupsRoutingModule {}
