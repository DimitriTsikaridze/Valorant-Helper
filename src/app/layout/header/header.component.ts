import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_ROUTES } from '@shared/constants';
import { ClickOutside } from 'ngxtension/click-outside';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive, NgTemplateOutlet, ClickOutside],
})
export class HeaderComponent implements OnInit {
  private menuIcon = 'https://i.ibb.co/HrfVRcx/menu.png';
  private closeIcon = 'https://i.ibb.co/rt3HybH/close.png';
  private router = inject(Router);

  headerRoutes = HEADER_ROUTES;
  active = false;
  iconURL = this.menuIcon;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active = false;
      }
    });
  }

  toggleMenu() {
    this.active = !this.active;
    this.iconURL = this.active ? this.closeIcon : this.menuIcon;
  }

  closeMenu() {
    this.active = false;
    this.iconURL = this.menuIcon;
  }
}
