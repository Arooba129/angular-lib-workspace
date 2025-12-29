npm install @aroobajaved/shared-ui

## Import required items in app.component.ts

import { SharedUiValidators } from '@aroobajaved/shared-ui';

## Import required items where error is required

import { FormError } from '@aroobajaved/shared-ui';

## USERNAME ##

<input type="text" formControlName="username" phoneNumber/>

## Error 
<lib-form-error
[control]="loginForm.get('username')">
</lib-form-error>

## PASSWORD ##

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


