import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appNumberOnly]' })
export class NumberOnlyComponent {
  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event'])
  onInputchange(even: any): void {
    const inputValue = this.el.nativeElement.value
    this.el.nativeElement.value = inputValue.replace(/[^0-9]*/g, '')
    console.log(even.target.value);


  }
}