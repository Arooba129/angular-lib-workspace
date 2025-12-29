npm install @aroobajaved/shared-ui

## Import required items in app.component.ts

import { SharedUiValidators } from '@aroobajaved/shared-ui';

## Import required items where error is required

import { FormError } from '@aroobajaved/shared-ui';

## USERNAME ##

## HTML Example
<input
  type="text"
  formControlName="username"
  phoneNumber
/>

## Error 
<lib-form-error
[control]="loginForm.get('username')">
</lib-form-error>

## PASSWORD ##

## HTML Example
<input
  type="password"
  formControlName="password"
  passwordCheck
  containsUppercase
/>

## Error 
<lib-form-error
[control]="registerForm.get('password')">
</lib-form-error>


## REQUIRED TRIMMED  ##


## HTML Example
<input
  type="text"
  formControlName="name"
  required
  requiredTrimmed
/>

## Error 
<lib-form-error
[control]="form.get('name')">
</lib-form-error>

## ALPHA ONLY ##

## HTML Example
<input
  type="text"
  formControlName="firstName"
  alphaOnly
/>

## Error 
<lib-form-error
  [control]="form.get('firstName')">
</lib-form-error>

## ALPHA NUMERIC ##


## HTML Example
<input
  type="text"
  formControlName="username"
  alphaNumeric
/>


## Error 
<lib-form-error
  [control]="form.get('username')">
</lib-form-error>

## EMAIL CHECK ##

## HTML Example
<input
  type="email"
  formControlName="email"
  emailCheck
/>

## Error 
<lib-form-error
  [control]="form.get('email')">
</lib-form-error>


## UPPERCASE ##


## HTML Example
<input
  type="password"
  formControlName="password"
  containsUppercase
/>

## Error 
<lib-form-error
  [control]="form.get('password')">
</lib-form-error>


## LOWERCASE ##

## HTML Example
<input
  type="password"
  formControlName="password"
  containsLowercase
/>

## Error 
<lib-form-error
  [control]="form.get('password')">
</lib-form-error>


## SPECIAL CHARACTER ##

## HTML Example
<input
  type="password"
  formControlName="password"
  containsSpecialChar
/>

## Error 
<lib-form-error
  [control]="form.get('password')">
</lib-form-error>

## MAX DIGIT ##

## HTML Example
<input
  type="text"
  formControlName="pin"
  maxDigits="5"
/>

## Error 
<lib-form-error
  [control]="form.get('pin')">
</lib-form-error>
 
## DECIMAL LIMIT ##

## HTML Example
<input
  type="text"
  formControlName="price"
  decimalLimit="2"
/>

## Error 
<lib-form-error
  [control]="form.get('price')">
</lib-form-error>

## DATE RANGE ##

## HTML Example
<input
  type="date"
  formControlName="startDate"
/>
<input
  type="date"
  formControlName="endDate"
  dateRange
/>

## Error 
<lib-form-error
  [control]="form.get('endDate')">
</lib-form-error


