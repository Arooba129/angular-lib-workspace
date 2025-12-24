import { ContainsLowercase } from './contains-lowercase';
import { AbstractControl } from '@angular/forms';

describe('ContainsLowercase Validator', () => {
  const validator = new ContainsLowercase();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should invalidate when no lowercase letter is present', () => {
    const result = validator.validate(mockControl('PASSWORD123'));
    expect(result).toEqual({ containsLowercase: true });
  });

  it('should allow value with lowercase letter', () => {
    const result = validator.validate(mockControl('Password123'));
    expect(result).toBeNull();
  });

  it('should allow lowercase-only value', () => {
    const result = validator.validate(mockControl('hello'));
    expect(result).toBeNull();
  });

  it('should ignore non-string values', () => {
    const result = validator.validate(mockControl(12345));
    expect(result).toBeNull();
  });
});
