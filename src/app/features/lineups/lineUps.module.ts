import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AgentLineupMapsComponent,
  AgentLineupsPreviewComponent,
  LineupsContainerComponent,
  MapPreviewComponent,
  ToggleSitesDirective,
} from './index';

import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from '@shared/components';

const routes: Routes = [
  { path: '', component: LineupsContainerComponent },
  { path: ':agentName', component: AgentLineupMapsComponent },
  { path: ':agentName/:mapName/:siteName', component: MapPreviewComponent },
];
@NgModule({
  declarations: [
    LineupsContainerComponent,
    AgentLineupsPreviewComponent,
    AgentLineupMapsComponent,
    MapPreviewComponent,
    ToggleSitesDirective,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), TitleComponent],
})
export class LineupsModule {}
