import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[confirmPassword]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPassword,
      multi: true
    }
  ]
})
export class ConfirmPassword implements Validator {

  @Input('confirmPassword') passwordControlName!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.parent || !this.passwordControlName) {
      return null;
    }

    const password = control.parent.get(this.passwordControlName)?.value;
    const confirm = control.value;

    if (password !== confirm) {
      return { confirmPassword: true };
    }

    return null;
  }
}
