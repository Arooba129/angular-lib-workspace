# AngularLibWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# AngularLibWorkspace

An Angular workspace containing a reusable input validation library designed for modern Angular applications.

The goal of this project is to provide clean, standalone, and production-ready form validators that can be reused across multiple applications without duplicating validation logic.

---

## Shared UI – Input Validation Library

The `shared-ui` library provides a collection of commonly used input validators for Angular reactive and template-driven forms.

This library focuses only on validation logic and intentionally avoids UI concerns.

---

## Features

- Standalone and tree-shakable validators
- No direct DOM manipulation
- Fully unit tested
- Compatible with Angular 15+ standalone APIs
- Suitable for public and enterprise use

---

## Available Validators

### Text Validators
- `requiredTrimmed` – invalidates empty or whitespace-only values
- `alphaOnly` – allows letters only
- `alphaNumeric` – allows letters and numbers

### Numeric Validators
- `maxDigits` – limits the total number of digits
- `decimalLimit` – limits digits after the decimal point

### Email and Phone Validators
- `emailCheck` – validates email format
- `phoneNumber` – validates international phone numbers (7–15 digits, optional `+`)

### Password and Security Validators
- `passwordCheck` – minimum 8 characters, letters and numbers
- `containsUppercase` – requires at least one uppercase letter
- `containsLowercase` – requires at least one lowercase letter
- `containsSpecialCharacter` – requires at least one special character
- `confirmPassword` – ensures password and confirm password match

### Date Validators
- `dateRange` – ensures the end date is after or equal to the start date

---

## Usage Example

### Reactive Forms

```ts
import { FormGroup, FormControl } from '@angular/forms';

this.form = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
});


<input formControlName="email" emailCheck />
<input formControlName="password" passwordCheck />
<input
  formControlName="confirmPassword"
  confirmPassword="password"
/>


<form
  [formGroup]="form"
  dateRange
  dateRangeStart="startDate"
  dateRangeEnd="endDate"
>
  <input type="date" formControlName="startDate" />
  <input type="date" formControlName="endDate" />
</form>



## Run Test Using:

ng test shared-ui


## Build the library:

ng build shared-ui

