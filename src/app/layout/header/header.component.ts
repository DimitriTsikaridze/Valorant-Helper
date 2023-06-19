import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OutsideClickDirective } from '../directives/outside-click.directive';
import { HEADER_ROUTES } from '@shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OutsideClickDirective,
    RouterLink,
    NgClass,
    NgFor,
    RouterLinkActive,
    NgTemplateOutlet,
  ],
})
export class HeaderComponent {
  private menuIcon = 'https://i.ibb.co/HrfVRcx/menu.png';
  private closeIcon = 'https://i.ibb.co/rt3HybH/close.png';

  headerRoutes = HEADER_ROUTES;
  active = false;
  iconURL = this.menuIcon;

  toggleMenu() {
    this.active = !this.active;
    this.active
      ? (this.iconURL = this.closeIcon)
      : (this.iconURL = this.menuIcon);
  }

  closeMenu() {
    this.active = false;
    this.iconURL = this.menuIcon;
  }
}
