import { Directive, ElementRef, HostListener, Input, numberAttribute } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maxDigits]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxDigits,
      multi: true,
    },
  ],
})
export class MaxDigits implements Validator {
  @Input({ transform: numberAttribute })
  maxDigits: string | number = 0;

  constructor(private el: ElementRef<HTMLInputElement>) {}


  @HostListener('input')
  onInput(): void {
    let value = this.el.nativeElement.value;

    // remove non-numeric characters
    value = value.replace(/[^0-9]/g, '');

    const limit = Number(this.maxDigits);

    if (limit > 0 && value.length > limit) {
      value = value.slice(0, limit);
    }

    this.el.nativeElement.value = value;
  }


  validate(control: AbstractControl): ValidationErrors | null {
    const value = String(control.value ?? '');
    const limit = Number(this.maxDigits);

    if (!value || limit <= 0) return null;

    const digitCount = value.replace(/\D/g, '').length;

    if (digitCount > limit) {
      return {
        maxDigits: {
          required: limit,
          actual: digitCount,
        },
      };
    }

    return null;
  }
}
