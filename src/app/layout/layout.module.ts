import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import {
  FooterComponent,
  HeaderComponent,
  OutsideClickDirective,
} from './index';
import { RouterModule } from '@angular/router';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [components, OutsideClickDirective],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [components],
})
export class LayoutModule {}
