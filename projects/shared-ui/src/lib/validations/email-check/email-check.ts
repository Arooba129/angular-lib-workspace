import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[emailCheck]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailCheck,
      multi: true,
    },
  ],
})
export class EmailCheck implements Validator {
  private readonly emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur')
  onBlur(): void {
    const value = this.el.nativeElement.value;

    if (!value) {
      this.el.nativeElement.setCustomValidity('');
      return;
    }

    if (!this.emailRegex.test(value)) {
      this.el.nativeElement.setCustomValidity('Invalid email address');
    } else {
      this.el.nativeElement.setCustomValidity('');
    }

    this.el.nativeElement.reportValidity();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    if (!this.emailRegex.test(value)) {
      return { emailCheck: true };
    }

    return null;
  }
}
