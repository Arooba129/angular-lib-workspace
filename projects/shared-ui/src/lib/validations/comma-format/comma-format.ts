import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CommaFormat]',
  standalone: true,
})
export class CommaFormat {
  @Input() allowDecimal = false;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput(): void {
    let value = this.el.nativeElement.value;

    value = value.replace(/,/g, '');

    const regex = this.allowDecimal ? /[^0-9.]/g : /[^0-9]/g;
    value = value.replace(regex, '');

    const parts = value.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1];

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.el.nativeElement.value =
      decimalPart !== undefined ? `${integerPart}.${decimalPart}` : integerPart;
  }
}
