import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AgentLineupMapsComponent,
  LineupsContainerComponent,
  MapPreviewComponent,
} from './index';

const routes: Routes = [
  { path: '', component: LineupsContainerComponent },
  { path: ':agentName', component: AgentLineupMapsComponent },
  { path: ':agentName/:mapName/:siteName', component: MapPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineupsRoutingModule {}
