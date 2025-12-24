import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[containsSpecialCharacter]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ContainsSpecialCharacter,
      multi: true,
    },
  ],
})
export class ContainsSpecialCharacter implements Validator {
  // at least one special character
  private readonly pattern = /[^A-Za-z0-9]/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    if (!this.pattern.test(value)) {
      return { containsSpecialCharacter: true };
    }

    return null;
  }
}
