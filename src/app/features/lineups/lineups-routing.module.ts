import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLineupMapsComponent } from './lineups-container/agent-lineup-maps/agent-lineup-maps.component';
import { LineupsContainerComponent } from './lineups-container/lineups-container.component';

const routes: Routes = [
  { path: '', component: LineupsContainerComponent },
  { path: ':agentName', component: AgentLineupMapsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineupsRoutingModule {}
