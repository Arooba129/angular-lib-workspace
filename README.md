npm install @aroobajaved/shared-ui

## Import required items in app.component.ts

import { SharedUiValidators } from '@aroobajaved/shared-ui';

## Import required items where error is required

import { FormError } from '@aroobajaved/shared-ui';

## HTML Example

## username

<input
  type="text"
  formControlName="username"
  phoneNumber
/>

<lib-form-error
[control]="loginForm.get('username')">
</lib-form-error>

## password

<input
  type="password"
  formControlName="password"
  passwordCheck
  containsUppercase
/>

<lib-form-error
[control]="registerForm.get('password')">
</lib-form-error>


## requiredTrimmed

<input
  type="text"
  formControlName="name"
  required
  requiredTrimmed
/>

<lib-form-error
[control]="form.get('name')">
</lib-form-error>

## alphaOnly

<input
  type="text"
  formControlName="firstName"
  alphaOnly
/>

<lib-form-error
  [control]="form.get('firstName')">
</lib-form-error>

## alphaNumeric

<input
  type="text"
  formControlName="username"
  alphaNumeric
/>

<lib-form-error
  [control]="form.get('username')">
</lib-form-error>

## emailCheck

<input
  type="email"
  formControlName="email"
  emailCheck
/>

<lib-form-error
  [control]="form.get('email')">
</lib-form-error>


## uppercase

<input
  type="password"
  formControlName="password"
  containsUppercase
/>

<lib-form-error
  [control]="form.get('password')">
</lib-form-error>


## lowercase

<input
  type="password"
  formControlName="password"
  containsLowercase
/>

<lib-form-error
  [control]="form.get('password')">
</lib-form-error>


## specialCharacter

<input
  type="password"
  formControlName="password"
  containsSpecialChar
/>

<lib-form-error
  [control]="form.get('password')">
</lib-form-error>

## maxDigit

<input
  type="text"
  formControlName="pin"
  maxDigits="5"
/>

<lib-form-error
  [control]="form.get('pin')">
</lib-form-error>

## decimal limit

<input
  type="text"
  formControlName="price"
  decimalLimit="2"
/>

<lib-form-error
  [control]="form.get('price')">
</lib-form-error>

## dateRange

<input
  type="date"
  formControlName="startDate"
/>

<input
  type="date"
  formControlName="endDate"
  dateRange
/>

<lib-form-error
  [control]="form.get('endDate')">
</lib-form-error


