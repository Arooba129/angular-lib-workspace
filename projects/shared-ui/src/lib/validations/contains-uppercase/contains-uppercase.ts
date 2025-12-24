import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[containsUppercase]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ContainsUppercase,
      multi: true,
    },
  ],
})
export class ContainsUppercase implements Validator {
  private readonly pattern = /[A-Z]/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    if (!this.pattern.test(value)) {
      return { containsUppercase: true };
    }

    return null;
  }
}
