import { DateRange } from './date-range';
import { FormControl, FormGroup } from '@angular/forms';

describe('DateRange Validator', () => {
  const validator = new DateRange();
  validator.startControlName = 'start';
  validator.endControlName = 'end';

  it('should invalidate when end date is before start date', () => {
    const form = new FormGroup({
      start: new FormControl('2024-05-10'),
      end: new FormControl('2024-05-01'),
    });

    const result = validator.validate(form);
    expect(result).toEqual({ dateRange: true });
  });

  it('should allow when end date is after start date', () => {
    const form = new FormGroup({
      start: new FormControl('2024-05-01'),
      end: new FormControl('2024-05-10'),
    });

    const result = validator.validate(form);
    expect(result).toBeNull();
  });

  it('should allow when start and end dates are equal', () => {
    const form = new FormGroup({
      start: new FormControl('2024-05-01'),
      end: new FormControl('2024-05-01'),
    });

    const result = validator.validate(form);
    expect(result).toBeNull();
  });

  it('should ignore missing values', () => {
    const form = new FormGroup({
      start: new FormControl(''),
      end: new FormControl(''),
    });

    const result = validator.validate(form);
    expect(result).toBeNull();
  });
});
