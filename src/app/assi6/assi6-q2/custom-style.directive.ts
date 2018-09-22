import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) {

    el.nativeElement.style.background='yellow'
    el.nativeElement.style.fontStyle='bold'

   }

}
