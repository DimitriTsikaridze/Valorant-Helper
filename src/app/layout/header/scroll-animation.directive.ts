import { Directive, inject, ElementRef, HostListener } from '@angular/core';
import { HEADER_HEIGHT } from '@shared/constants';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective {
  private elementRef = inject(ElementRef);
  private prevScrollPos = 0;

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollPos = window.scrollY;
    const elem = this.elementRef.nativeElement;
    if (currentScrollPos > HEADER_HEIGHT) {
      elem.style.top =
        this.prevScrollPos > currentScrollPos ? '0' : `-${HEADER_HEIGHT}px`;
    }
    this.prevScrollPos = currentScrollPos;
  }
}
