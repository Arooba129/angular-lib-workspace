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

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur')
  onBlur(): void {
    const value = this.el.nativeElement.value;

    if (!value) {
      this.el.nativeElement.setCustomValidity('');
      return;
    }

    if (!this.passwordRegex.test(value)) {
      this.el.nativeElement.setCustomValidity(
        'Password must be at least 8 characters and contain letters and numbers'
      );
    } else {
      this.el.nativeElement.setCustomValidity('');
    }

    this.el.nativeElement.reportValidity();
  }

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
