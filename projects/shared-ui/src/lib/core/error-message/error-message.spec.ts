import { ERROR_MESSAGES } from './error-message';

describe('ERROR_MESSAGES', () => {

  it('should return required error message', () => {
    expect(ERROR_MESSAGES['required']()).toBe('This field is required');
  });

  it('should return requiredTrimmed error message', () => {
    expect(ERROR_MESSAGES['requiredTrimmed']()).toBe('This field cannot be empty');
  });

  it('should return email error message', () => {
    expect(ERROR_MESSAGES['email']()).toBe('Invalid email address');
  });

  it('should return phoneNumber error message', () => {
    expect(ERROR_MESSAGES['phoneNumber']()).toBe('Invalid phone number');
  });

  it('should return alphaOnly error message', () => {
    expect(ERROR_MESSAGES['alphaOnly']()).toBe('Only alphabetic characters are allowed');
  });

  it('should return alphaNumeric error message', () => {
    expect(ERROR_MESSAGES['alphaNumeric']()).toBe('Only alphanumeric characters are allowed');
  });

  it('should return maxDigits error message with required value', () => {
    const message = ERROR_MESSAGES['maxDigits']({ required: 5, actual: 8 });
    expect(message).toBe('Maximum 5 digits allowed');
  });

  it('should return decimalLimit error message with limit value', () => {
    const message = ERROR_MESSAGES['decimalLimit']({ limit: 2 });
    expect(message).toBe('Maximum 2 decimal places allowed');
  });

  it('should return missingLowercase error message', () => {
    expect(ERROR_MESSAGES['missingLowercase']()).toBe(
      'At least one lowercase letter is required'
    );
  });

  it('should return missingUppercase error message', () => {
    expect(ERROR_MESSAGES['missingUppercase']()).toBe(
      'At least one uppercase letter is required'
    );
  });

  it('should return missingSpecialChar error message', () => {
    expect(ERROR_MESSAGES['missingSpecialChar']()).toBe(
      'At least one special character is required'
    );
  });

  it('should return weakPassword error message', () => {
    expect(ERROR_MESSAGES['weakPassword']()).toBe(
      'Password does not meet strength requirements'
    );
  });

  it('should return passwordMismatch error message', () => {
    expect(ERROR_MESSAGES['passwordMismatch']()).toBe(
      'Passwords do not match'
    );
  });

  it('should return invalidDateRange error message', () => {
    expect(ERROR_MESSAGES['invalidDateRange']()).toBe(
      'End date must be after start date'
    );
  });

});
