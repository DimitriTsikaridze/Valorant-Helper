import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineupsRoutingModule } from './lineups-routing.module';
import { LineupsContainerComponent } from './lineups-container/lineups-container.component';
import { SharedModule } from '@shared/shared.module';
import { AgentLineupsPreviewComponent } from './lineups-container/agent-lineups-preview/agent-lineups-preview.component';
import { AgentLineupMapsComponent } from './lineups-container/agent-lineup-maps/agent-lineup-maps.component';
import { MapPreviewComponent } from './lineups-container/map-preview/map-preview.component';
import { ToggleSitesDirective } from './toggle-sites.directive';

@NgModule({
  declarations: [
    LineupsContainerComponent,
    AgentLineupsPreviewComponent,
    AgentLineupMapsComponent,
    MapPreviewComponent,
    ToggleSitesDirective,
  ],
  imports: [CommonModule, LineupsRoutingModule, SharedModule],
})
export class LineupsModule {}
