import { ContainsUppercase } from './contains-uppercase';
import { AbstractControl } from '@angular/forms';

describe('ContainsUppercase Validator', () => {
  const validator = new ContainsUppercase();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should invalidate when no uppercase letter is present', () => {
    const result = validator.validate(mockControl('password123'));
    expect(result).toEqual({ containsUppercase: true });
  });

  it('should allow value with uppercase letter', () => {
    const result = validator.validate(mockControl('Password123'));
    expect(result).toBeNull();
  });

  it('should allow uppercase-only value', () => {
    const result = validator.validate(mockControl('HELLO'));
    expect(result).toBeNull();
  });

  it('should ignore non-string values', () => {
    const result = validator.validate(mockControl(12345));
    expect(result).toBeNull();
  });
});
