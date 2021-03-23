import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @HostBinding('style.color') color: string;
  constructor(private elementRef: ElementRef) {
    this.color = 'black';
    elementRef.nativeElement.style.background = ' white';

  }
  @HostListener('mouseover') onMouseOver() {
    this.color = 'LightGoldenRodYellow';
    this.elementRef.nativeElement.style.background = 'lightblue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.color = '#9ACD32';
    this.elementRef.nativeElement.style.background = 'white';
  }

}
