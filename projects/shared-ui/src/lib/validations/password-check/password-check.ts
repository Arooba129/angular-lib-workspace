import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordCheck]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordCheck),
      multi: true,
    },
  ],
})
export class PasswordCheck implements Validator {
  private readonly passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (typeof value !== 'string') {
      return {
        passwordCheck: {
          minLength: 8,
          requiresLetter: true,
          requiresNumber: true,
        },
      };
    }

    if (!this.passwordRegex.test(value)) {
      return {
        passwordCheck: {
          minLength: 8,
          requiresLetter: true,
          requiresNumber: true,
        },
      };
    }

    return null;
  }
}
