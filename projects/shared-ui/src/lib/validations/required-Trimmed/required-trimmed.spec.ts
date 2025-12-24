import { RequiredTrimmed } from './required-trimmed';
import { AbstractControl } from '@angular/forms';

describe('RequiredTrimmed Validator', () => {
  const validator = new RequiredTrimmed();

  function mockControl(value: any): AbstractControl {
    return { value } as AbstractControl;
  }

  it('should invalidate empty string', () => {
    const result = validator.validate(mockControl(''));
    expect(result).toEqual({ requiredTrimmed: true });
  });

  it('should invalidate spaces only', () => {
    const result = validator.validate(mockControl('     '));
    expect(result).toEqual({ requiredTrimmed: true });
  });

  it('should allow valid text', () => {
    const result = validator.validate(mockControl('Hello'));
    expect(result).toBeNull();
  });

  it('should allow text with surrounding spaces', () => {
    const result = validator.validate(mockControl('  Hello  '));
    expect(result).toBeNull();
  });
});
