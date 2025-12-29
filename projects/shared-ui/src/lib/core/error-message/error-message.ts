
export const ERROR_MESSAGES: Record<string, (e?: any) => string> = {
  required: () => 'This field is required',
  requiredTrimmed: () => 'This field cannot be empty',
  emailCheck: () => 'Invalid email address',
  phoneNumber: () => 'Invalid phone number',

  alphaOnly: () => 'Only alphabetic characters are allowed',
  alphaNumeric: () => 'Only alphanumeric characters are allowed',

  maxDigits: e => `Maximum ${e.required} digits allowed`,
  decimalLimit: e => `Maximum ${e.limit} decimal places allowed`,

  containsLowercase: () => 'At least one lowercase letter is required',
  containsUppercase: () => 'At least one uppercase letter is required',
  containsSpecialChar: () => 'At least one special character is required',

  passwordCheck: () => 'Password does not meet strength requirements',

  dateRange: () => 'End date must be after start date'
};
