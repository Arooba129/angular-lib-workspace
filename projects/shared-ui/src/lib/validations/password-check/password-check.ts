import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
@Directive({
  selector: '[passwordCheck]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordCheck,
      multi: true,
    },
  ],
})
export class PasswordCheck implements Validator {

  private readonly passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

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
