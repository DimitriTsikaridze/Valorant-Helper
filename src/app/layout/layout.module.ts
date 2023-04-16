import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FooterComponent,
  HeaderComponent,
  OutsideClickDirective,
} from './index';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    components,
    OutsideClickDirective,
  ],
  exports: [components],
})
export class LayoutModule {}
