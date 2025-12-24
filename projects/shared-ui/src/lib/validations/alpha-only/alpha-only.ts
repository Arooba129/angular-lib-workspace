import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[alphaOnly]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AlphaOnly,
      multi: true,
    },
  ],
})
export class AlphaOnly implements Validator {
  private readonly pattern = /^[A-Za-z]+$/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    if (!this.pattern.test(value)) {
      return { alphaOnly: true };
    }

    return null;
  }
}
