export const ERROR_MESSAGES: Record<string, (e?: any) => string> = {
  required: () => 'This field is required',
  requiredTrimmed: () => 'This field cannot be empty',
  email: () => 'Invalid email address',
  phoneNumber: () => 'Invalid phone number',

  alphaOnly: () => 'Only alphabetic characters are allowed',
  alphaNumeric: () => 'Only alphanumeric characters are allowed',

  maxDigits: e => `Maximum ${e.required} digits allowed`,
  decimalLimit: e => `Maximum ${e.limit} decimal places allowed`,

  missingLowercase: () => 'At least one lowercase letter is required',
  missingUppercase: () => 'At least one uppercase letter is required',
  missingSpecialChar: () => 'At least one special character is required',

  weakPassword: () => 'Password does not meet strength requirements',
  passwordMismatch: () => 'Passwords do not match',

  invalidDateRange: () => 'End date must be after start date'
};
