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

    const dotIndex = value.indexOf('.');

    let integerPart = '';
    let decimalPart = '';
    let hasDot = false;

    if (dotIndex >= 0) {
      hasDot = true;
      integerPart = value.slice(0, dotIndex);
      decimalPart = value.slice(dotIndex + 1);
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
