import { PhoneNumber } from './phone-number';
import { AbstractControl } from '@angular/forms';

describe('PhoneNumber Validator', () => {
  const validator = new PhoneNumber();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should allow valid phone number without country code', () => {
    const result = validator.validate(mockControl('03001234567'));
    expect(result).toBeNull();
  });

  it('should allow valid phone number with country code', () => {
    const result = validator.validate(mockControl('+923001234567'));
    expect(result).toBeNull();
  });

  it('should invalidate phone number with letters', () => {
    const result = validator.validate(mockControl('abc123456'));
    expect(result).toEqual({ phoneNumber: true });
  });

  it('should invalidate phone number with symbols', () => {
    const result = validator.validate(mockControl('0300-1234567'));
    expect(result).toEqual({ phoneNumber: true });
  });

  it('should ignore empty value', () => {
    const result = validator.validate(mockControl(''));
    expect(result).toBeNull();
  });
});
