import { Directive, Input, forwardRef, numberAttribute } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[decimalDigits]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DecimalLimit),
      multi: true,
    },
  ],
})
export class DecimalLimit implements Validator {
  @Input({ transform: numberAttribute })
  decimalDigits = 0;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value || this.decimalDigits <= 0) return null;

    const [, decimal] = String(value).split('.');

    if (decimal && decimal.length > this.decimalDigits) {
      return { decimalDigits: true };
    }

    return null;
  }
}
