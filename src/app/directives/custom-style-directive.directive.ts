import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyleDirective]'
})
export class CustomStyleDirectiveDirective {

  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = 'red';
  }
  // @HostListener('input', ['$event']) onInputChange(event: any) {
  //   const initalValue = this.el.nativeElement.value;
  //   this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
  //   if (initalValue !== this.el.nativeElement.value) {
  //     event.stopPropagation();
  //   }

  // }
}