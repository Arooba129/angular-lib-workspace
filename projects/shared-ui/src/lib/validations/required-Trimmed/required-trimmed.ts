import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[requiredTrimmed]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredTrimmed,
      multi: true,
    },
  ],
})
export class RequiredTrimmed implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined) {
      return { requiredTrimmed: true };
    }

    if (typeof value === 'string' && value.trim().length === 0) {
      return { requiredTrimmed: true };
    }

    return null;
  }
}
