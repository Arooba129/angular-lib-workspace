import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[phoneNumber]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumber,
      multi: true
    }
  ]
})
export class PhoneNumber implements Validator {

  private readonly pattern = /^\+?[0-9]{7,15}$/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    if (typeof value !== 'string') {
      return { phoneNumber: true };
    }

    if (!this.pattern.test(value)) {
      return { phoneNumber: true };
    }

    return null;
  }
}
