import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from '../features/home/home-routing.module';
import {
  FooterComponent,
  HeaderComponent,
  OutsideClickDirective,
} from './index';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [components, OutsideClickDirective],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [components],
})
export class LayoutModule {}
