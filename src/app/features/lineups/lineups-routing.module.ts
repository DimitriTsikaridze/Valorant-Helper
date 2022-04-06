import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLineupMapsComponent } from './lineups-container/agent-lineup-maps/agent-lineup-maps.component';
import { LineupsContainerComponent } from './lineups-container/lineups-container.component';
import { MapPreviewComponent } from './lineups-container/map-preview/map-preview.component';

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
