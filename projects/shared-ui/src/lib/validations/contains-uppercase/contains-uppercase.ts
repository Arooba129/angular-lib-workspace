import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[containsUppercase]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContainsUppercase),
      multi: true,
    },
  ],
})
export class ContainsUppercase implements Validator {
  private readonly pattern = /[A-Z]/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    return this.pattern.test(value) ? null : { containsUppercase: true };
  }
}
