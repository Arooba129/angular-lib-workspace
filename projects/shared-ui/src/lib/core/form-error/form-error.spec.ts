import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { FormError } from './form-error';

describe('FormError', () => {
  let component: FormError;
  let fixture: ComponentFixture<FormError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormError], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(FormError);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show error when control is untouched', () => {
    const control = new FormControl('', Validators.required);
    component.control = control;

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent?.trim()).toBe('');
  });

  it('should show required error message when touched', () => {
    const control = new FormControl('', Validators.required);
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('This field is required');
  });

  it('should show email error message', () => {
    const control = new FormControl('invalid-email');
    control.setErrors({ email: true });
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Invalid email address');
  });

  it('should show maxDigits error message with required value', () => {
    const control = new FormControl('123456');
    control.setErrors({ maxDigits: { required: 5, actual: 6 } });
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Maximum 5 digits allowed');
  });

  it('should show decimalLimit error message', () => {
    const control = new FormControl('12.345');
    control.setErrors({ decimalLimit: { limit: 2 } });
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Maximum 2 decimal places allowed');
  });

  it('should show passwordMismatch error message', () => {
    const control = new FormControl('test');
    control.setErrors({ passwordMismatch: true });
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Passwords do not match');
  });

  it('should update error message when error changes (new instance)', () => {
    let control = new FormControl('');
    control.setErrors({ email: true });
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    let element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Invalid email address');
    fixture = TestBed.createComponent(FormError);
    component = fixture.componentInstance;

    control = new FormControl('');
    control.setErrors({ requiredTrimmed: true });
    control.markAsTouched();

    component.control = control;
    fixture.detectChanges();

    element = fixture.nativeElement;
    expect(element.textContent).toContain('This field cannot be empty');
  });
});
