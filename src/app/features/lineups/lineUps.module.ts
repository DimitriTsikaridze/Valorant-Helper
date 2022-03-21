import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineupsRoutingModule } from './lineups-routing.module';
import { LineupsContainerComponent } from './lineups-container/lineups-container.component';
import { SharedModule } from '../../shared/shared.module';
import { AgentLineupsPreviewComponent } from './lineups-container/agent-lineups-preview/agent-lineups-preview.component';

@NgModule({
  declarations: [LineupsContainerComponent, AgentLineupsPreviewComponent],
  imports: [CommonModule, LineupsRoutingModule, SharedModule],
})
export class LineupsModule {}
