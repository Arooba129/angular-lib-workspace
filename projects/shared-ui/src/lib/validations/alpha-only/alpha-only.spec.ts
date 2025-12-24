import { AlphaOnly } from './alpha-only';
import { AbstractControl } from '@angular/forms';

describe('AlphaOnly Validator', () => {
  const validator = new AlphaOnly();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should allow alphabetic characters only', () => {
    const result = validator.validate(mockControl('Hello'));
    expect(result).toBeNull();
  });

  it('should invalidate numbers', () => {
    const result = validator.validate(mockControl('Hello123'));
    expect(result).toEqual({ alphaOnly: true });
  });

  it('should invalidate spaces', () => {
    const result = validator.validate(mockControl('Hello World'));
    expect(result).toEqual({ alphaOnly: true });
  });

  it('should invalidate special characters', () => {
    const result = validator.validate(mockControl('Hello@'));
    expect(result).toEqual({ alphaOnly: true });
  });

  it('should ignore non-string values', () => {
    const result = validator.validate(mockControl(123));
    expect(result).toBeNull();
  });
});
