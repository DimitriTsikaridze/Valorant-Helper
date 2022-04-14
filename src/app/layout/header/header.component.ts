import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  active = false;
  menuIcon = 'https://i.ibb.co/HrfVRcx/menu.png';
  closeIcon = 'https://i.ibb.co/rt3HybH/close.png';
  iconURL = this.menuIcon;

  toggleMenu() {
    this.active = !this.active;
    this.active
      ? (this.iconURL = this.closeIcon)
      : (this.iconURL = this.menuIcon);
  }
}
