import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineupsRoutingModule } from './lineups-routing.module';
import { SharedModule } from '@shared/shared.module';
import {
  AgentLineupMapsComponent,
  AgentLineupsPreviewComponent,
  LineupsContainerComponent,
  MapPreviewComponent,
  ToggleSitesDirective,
} from './index';

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
