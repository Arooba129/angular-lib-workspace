import { ContainsSpecialCharacter } from './contains-special-character';
import { AbstractControl } from '@angular/forms';

describe('ContainsSpecialCharacter Validator', () => {
  const validator = new ContainsSpecialCharacter();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should invalidate when no special character is present', () => {
    const result = validator.validate(mockControl('Password123'));
    expect(result).toEqual({ containsSpecialCharacter: true });
  });

  it('should allow value with special character', () => {
    const result = validator.validate(mockControl('Password@123'));
    expect(result).toBeNull();
  });

  it('should allow only special characters', () => {
    const result = validator.validate(mockControl('@#$%'));
    expect(result).toBeNull();
  });

  it('should ignore non-string values', () => {
    const result = validator.validate(mockControl(12345));
    expect(result).toBeNull();
  });
});
