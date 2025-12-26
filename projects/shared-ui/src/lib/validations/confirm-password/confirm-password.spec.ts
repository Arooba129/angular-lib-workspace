import { ConfirmPassword } from './confirm-password';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

describe('ConfirmPassword Validator', () => {
  const validator = new ConfirmPassword();
  validator.passwordControlName = 'password';

  it('should invalidate when passwords do not match', () => {
    const form = new FormGroup({
      password: new FormControl('Password123'),
      confirm: new FormControl('Password1234'),
    });

    const result = validator.validate(form.get('confirm') as AbstractControl);
    expect(result).toEqual({ confirmPassword: true });
  });

  it('should allow when passwords match', () => {
    const form = new FormGroup({
      password: new FormControl('Password123'),
      confirm: new FormControl('Password123'),
    });

    const result = validator.validate(form.get('confirm') as AbstractControl);
    expect(result).toBeNull();
  });
});
