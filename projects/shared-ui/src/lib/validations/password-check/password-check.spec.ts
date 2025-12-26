import { PasswordCheck } from './password-check';
import { AbstractControl } from '@angular/forms';

describe('PasswordCheck Validator', () => {
  const validator = new PasswordCheck();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should invalidate when password is shorter than 8 characters', () => {
    const result = validator.validate(mockControl('abc12'));
    expect(result).toEqual({
      passwordCheck: {
        minLength: 8,
        requiresLetter: true,
        requiresNumber: true,
      },
    });
  });

  it('should invalidate when password has no number', () => {
    const result = validator.validate(mockControl('abcdefgh'));
    expect(result).toEqual({
      passwordCheck: {
        minLength: 8,
        requiresLetter: true,
        requiresNumber: true,
      },
    });
  });

  it('should invalidate when password has no letter', () => {
    const result = validator.validate(mockControl('12345678'));
    expect(result).toEqual({
      passwordCheck: {
        minLength: 8,
        requiresLetter: true,
        requiresNumber: true,
      },
    });
  });

  it('should allow valid password with letters and numbers', () => {
    const result = validator.validate(mockControl('abc12345'));
    expect(result).toBeNull();
  });

  it('should ignore empty value', () => {
    const result = validator.validate(mockControl(''));
    expect(result).toBeNull();
  });

  it('should invalidate non-string values', () => {
    const result = validator.validate(mockControl(12345678));
    expect(result).toEqual({
      passwordCheck: {
        minLength: 8,
        requiresLetter: true,
        requiresNumber: true,
      },
    });
  });
});
