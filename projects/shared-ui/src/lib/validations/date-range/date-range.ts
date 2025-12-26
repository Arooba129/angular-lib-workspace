import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[dateRange]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateRange,
      multi: true
    }
  ]
})
export class DateRange implements Validator {

  @Input('dateRangeStart') startControlName!: string;
  @Input('dateRangeEnd') endControlName!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.get) return null;

    const start = control.get(this.startControlName)?.value;
    const end = control.get(this.endControlName)?.value;

    if (!start || !end) return null;

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return null;
    }

    if (endDate < startDate) {
      return { dateRange: true };
    }

    return null;
  }
}
