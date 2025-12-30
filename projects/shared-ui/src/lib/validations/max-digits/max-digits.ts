import { Directive, Input, forwardRef, numberAttribute } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[maxDigits]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxDigits),
      multi: true,
    },
  ],
})
export class MaxDigits implements Validator {
  @Input({ transform: numberAttribute })
  maxDigits = 0;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value || this.maxDigits <= 0) return null;

    const digitCount = String(value).replace(/\D/g, '').length;

    return digitCount > this.maxDigits ? { maxDigits: true } : null;
  }
}
