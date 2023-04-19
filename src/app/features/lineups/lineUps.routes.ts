import { Routes } from '@angular/router';
import { LineupsContainerComponent } from './lineups-container/lineups-container.component';
import { AgentLineupMapsComponent } from './agent-lineup-maps/agent-lineup-maps.component';
import { MapPreviewComponent } from './map-preview/map-preview.component';

const lineUpsRoutes = [
  { path: '', component: LineupsContainerComponent },
  { path: ':agentName', component: AgentLineupMapsComponent },
  { path: ':agentName/:mapName/:siteName', component: MapPreviewComponent },
] as Routes;

export default lineUpsRoutes;
