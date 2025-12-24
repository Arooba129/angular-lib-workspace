import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[alphaNumeric]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AlphaNumeric,
      multi: true,
    },
  ],
})
export class AlphaNumeric implements Validator {
  private readonly pattern = /^[A-Za-z0-9]+$/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    if (!this.pattern.test(value)) {
      return { alphaNumeric: true };
    }

    return null;
  }
}
