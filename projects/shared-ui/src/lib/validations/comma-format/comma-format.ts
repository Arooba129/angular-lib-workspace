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
    let value = input.value;

    value = value.replace(/,/g, '');
    value = value.replace(/[^0-9.]/g, '');

    const parts = value.split('.');
    let integerPart = parts[0] ?? '';
    let decimalPart = parts[1] ?? '';

    integerPart = integerPart.slice(0, this.MAX_INTEGER_DIGITS);
    decimalPart = decimalPart.slice(0, this.DECIMAL_DIGITS);

    const formattedInteger =
      integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const formattedValue =
      decimalPart.length > 0
        ? `${formattedInteger}.${decimalPart}`
        : formattedInteger;

    if (input.value !== formattedValue) {
      input.value = formattedValue;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}
