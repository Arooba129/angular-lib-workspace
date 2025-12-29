import { Component } from '@angular/core';
import { RequiredTrimmed } from './validations/required-trimmed/required-trimmed';
import { AlphaOnly } from './validations/alpha-only/alpha-only';
import { AlphaNumeric } from './validations/alpha-numeric/alpha-numeric';
import { MaxDigits } from './validations/max-digits/max-digits';
import { DecimalLimit } from './validations/decimal-limit/decimal-limit';
import { EmailCheck } from './validations/email-check/email-check';
import { PhoneNumber } from './validations/phone-number/phone-number';
import { PasswordCheck } from './validations/password-check/password-check';
import { ContainsUppercase } from './validations/contains-uppercase/contains-uppercase';
import { ContainsLowercase } from './validations/contains-lowercase/contains-lowercase';
import { ContainsSpecialCharacter } from './validations/contains-special-character/contains-special-character';
import { DateRange } from './validations/date-range/date-range';
import { FormError } from './core/form-error/form-error';




export const SharedUiValidators = [
  RequiredTrimmed,
  AlphaOnly,
  AlphaNumeric,
  MaxDigits,
  DecimalLimit,
  EmailCheck,
  PhoneNumber,
  PasswordCheck,
  ContainsUppercase,
  ContainsLowercase,
  ContainsSpecialCharacter,
  DateRange,

] as const; 


@Component({
  selector: 'lib-shared-ui',
  imports: [],
  template: `
    <p>
      shared-ui works!
    </p>
  `,
  styles: ``,
})



export class SharedUi {

}
