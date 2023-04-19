import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AgentLineupMapsComponent,
  AgentLineupsPreviewComponent,
  LineupsContainerComponent,
  MapPreviewComponent,
  ToggleSitesDirective,
} from './index';

import { LoadingComponent, TitleComponent } from '@shared/components';

@NgModule({
  imports: [
    CommonModule,
    TitleComponent,
    LoadingComponent,
    LineupsContainerComponent,
    AgentLineupsPreviewComponent,
    AgentLineupMapsComponent,
    MapPreviewComponent,
    ToggleSitesDirective,
  ],
})
export default class LineupsModule {}
