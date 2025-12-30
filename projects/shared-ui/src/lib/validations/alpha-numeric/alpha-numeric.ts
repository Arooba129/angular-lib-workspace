import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[alphaNumeric]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AlphaNumeric),
      multi: true,
    },
  ],
})
export class AlphaNumeric implements Validator {
  private readonly pattern = /^[A-Za-z0-9]+$/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    return this.pattern.test(value) ? null : { alphaNumeric: true };
  }
}
