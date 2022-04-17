import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output()
  clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }
}
