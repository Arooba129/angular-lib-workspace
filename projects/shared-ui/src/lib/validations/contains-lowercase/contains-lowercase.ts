import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[containsLowercase]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContainsLowercase),
      multi: true,
    },
  ],
})
export class ContainsLowercase implements Validator {
  private readonly pattern = /[a-z]/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    return this.pattern.test(value) ? null : { containsLowercase: true };
  }
}
