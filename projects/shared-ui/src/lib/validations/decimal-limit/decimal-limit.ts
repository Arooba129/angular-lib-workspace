import { Directive, ElementRef, HostListener, Input, numberAttribute } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[decimalDigits]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DecimalLimit,
      multi: true,
    },
  ],
})
export class DecimalLimit implements Validator {
  @Input({ transform: numberAttribute })
  decimalDigits: string | number = 0;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput(): void {
    let value = this.el.nativeElement.value;
    value = value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }

    const limit = Number(this.decimalDigits);

    if (limit > 0 && value.includes('.')) {
      const [int, dec] = value.split('.');
      value = int + '.' + dec.slice(0, limit);
    }

    this.el.nativeElement.value = value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = String(control.value ?? '');
    const limit = Number(this.decimalDigits);

    if (!value || limit <= 0) return null;

    if (!value.includes('.')) return null;

    const decimalPart = value.split('.')[1] ?? '';

    if (decimalPart.length > limit) {
      return {
        decimalDigits: {
          required: limit,
          actual: decimalPart.length,
        },
      };
    }

    return null;
  }
}
