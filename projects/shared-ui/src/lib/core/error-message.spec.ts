import { ERRORMESSAGES } from './error-message';

describe('ERROR_MESSAGES', () => {

  it('should return required error message', () => {
    expect(ERRORMESSAGES['required']()).toBe('This field is required');
  });

  it('should return requiredTrimmed error message', () => {
    expect(ERRORMESSAGES['requiredTrimmed']()).toBe('This field cannot be empty');
  });

  it('should return email error message', () => {
    expect(ERRORMESSAGES['email']()).toBe('Invalid email address');
  });

  it('should return phoneNumber error message', () => {
    expect(ERRORMESSAGES['phoneNumber']()).toBe('Invalid phone number');
  });

  it('should return alphaOnly error message', () => {
    expect(ERRORMESSAGES['alphaOnly']()).toBe('Only alphabetic characters are allowed');
  });

  it('should return alphaNumeric error message', () => {
    expect(ERRORMESSAGES['alphaNumeric']()).toBe('Only alphanumeric characters are allowed');
  });

  it('should return maxDigits error message with required value', () => {
    const message = ERRORMESSAGES['maxDigits']({ required: 5, actual: 8 });
    expect(message).toBe('Maximum 5 digits allowed');
  });

  it('should return decimalLimit error message with limit value', () => {
    const message = ERRORMESSAGES['decimalLimit']({ limit: 2 });
    expect(message).toBe('Maximum 2 decimal places allowed');
  });

  it('should return missingLowercase error message', () => {
    expect(ERRORMESSAGES['missingLowercase']()).toBe(
      'At least one lowercase letter is required'
    );
  });

  it('should return missingUppercase error message', () => {
    expect(ERRORMESSAGES['missingUppercase']()).toBe(
      'At least one uppercase letter is required'
    );
  });

  it('should return missingSpecialChar error message', () => {
    expect(ERRORMESSAGES['missingSpecialChar']()).toBe(
      'At least one special character is required'
    );
  });

  it('should return weakPassword error message', () => {
    expect(ERRORMESSAGES['weakPassword']()).toBe(
      'Password does not meet strength requirements'
    );
  });

  it('should return passwordMismatch error message', () => {
    expect(ERRORMESSAGES['passwordMismatch']()).toBe(
      'Passwords do not match'
    );
  });

  it('should return invalidDateRange error message', () => {
    expect(ERRORMESSAGES['invalidDateRange']()).toBe(
      'End date must be after start date'
    );
  });

});
