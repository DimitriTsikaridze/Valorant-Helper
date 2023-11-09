import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleSites]',
  standalone: true,
})
export class ToggleSitesDirective {
  @HostBinding('class.active')
  active = false;

  @HostListener('click')
  toggle() {
    this.active = !this.active;
  }
}
