import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[CommaFormat]',
  standalone: true,
})
export class CommaFormat {
  private readonly MAX_INTEGER_DIGITS = 10;
  private readonly DECIMAL_DIGITS = 2;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput(): void {
    const input = this.el.nativeElement;
    const original = input.value;

    let value = original.replace(/,/g, '');
    value = value.replace(/[^0-9.]/g, '');

    const firstDotIndex = value.indexOf('.');
    if (firstDotIndex !== -1) {
      value =
        value.slice(0, firstDotIndex + 1) +
        value.slice(firstDotIndex + 1).replace(/\./g, '');
    }

    let integerPart = '';
    let decimalPart = '';
    let hasDot = firstDotIndex !== -1;

    if (hasDot) {
      integerPart = value.slice(0, firstDotIndex);
      decimalPart = value.slice(firstDotIndex + 1);
    } else {
      integerPart = value;
    }

    integerPart = integerPart.slice(0, this.MAX_INTEGER_DIGITS);
    decimalPart = decimalPart.slice(0, this.DECIMAL_DIGITS);

    const formattedInteger =
      integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let formattedValue = formattedInteger;

    if (hasDot) {
      formattedValue += '.';
      formattedValue += decimalPart;
    }

    if (formattedValue !== original) {
      input.value = formattedValue;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}
