import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../error-message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-form-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-error.html',
  styleUrls: ['./form-error.css'],
})
export class FormError {

  @Input() control!: AbstractControl | null;

  get errorMessage(): string | null {
    if (!this.control || !this.control.touched || !this.control.errors) {
      return null;
    }

    return this.resolveError(this.control.errors);
  }

  private resolveError(errors: ValidationErrors): string {
    const key = Object.keys(errors)[0];
    const resolver = ERROR_MESSAGES[key];

    return resolver ? resolver(errors[key]) : 'Invalid value';
  }
}
