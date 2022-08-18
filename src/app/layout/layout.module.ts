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
  declarations: [components, OutsideClickDirective],
  imports: [CommonModule, RouterModule, ButtonComponent],
  exports: [components],
})
export class LayoutModule {}
