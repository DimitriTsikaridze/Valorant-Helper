import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrosshairsContainerComponent } from './crosshairs-container/crosshairs-container.component';

const routes: Routes = [{ path: '', component: CrosshairsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrosshairsRoutingModule {}
