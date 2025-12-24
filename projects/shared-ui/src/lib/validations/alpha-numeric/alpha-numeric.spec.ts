import { AlphaNumeric } from './alpha-numeric';
import { AbstractControl } from '@angular/forms';

describe('AlphaNumeric Validator', () => {
  const validator = new AlphaNumeric();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should allow letters only', () => {
    const result = validator.validate(mockControl('Hello'));
    expect(result).toBeNull();
  });

  it('should allow numbers only', () => {
    const result = validator.validate(mockControl('12345'));
    expect(result).toBeNull();
  });

  it('should allow alphanumeric values', () => {
    const result = validator.validate(mockControl('User123'));
    expect(result).toBeNull();
  });

  it('should invalidate spaces', () => {
    const result = validator.validate(mockControl('User 123'));
    expect(result).toEqual({ alphaNumeric: true });
  });

  it('should invalidate special characters', () => {
    const result = validator.validate(mockControl('User@123'));
    expect(result).toEqual({ alphaNumeric: true });
  });

  it('should ignore non-string values', () => {
    const result = validator.validate(mockControl(456));
    expect(result).toBeNull();
  });
});
