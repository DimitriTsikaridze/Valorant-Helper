import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
  standalone: true,
})
export class OutsideClickDirective {
  private elementRef = inject(ElementRef);

  @Output() clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
