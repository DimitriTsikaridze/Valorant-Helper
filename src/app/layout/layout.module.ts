import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from '../features/home/home-routing.module';
import { OutsideClickDirective } from './outside-click.directive';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [components, OutsideClickDirective],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [components],
})
export class LayoutModule {}
