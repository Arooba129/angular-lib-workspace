import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { PasswordCheck } from './password-check';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, PasswordCheck],
  template: `
    <input
      type="password"
      passwordCheck
      [formControl]="password"
    />
  `
})
class TestComponent {
  password = new FormControl('');
}

describe('PasswordCheck Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let input: HTMLInputElement;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    input = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should reject weak password (DOM)', () => {
    input.value = 'abcdef';
    input.dispatchEvent(new Event('blur'));

    expect(input.validationMessage).toContain('Password must be at least 8');
  });

  it('should accept strong password (DOM)', () => {
    input.value = 'abc12345';
    input.dispatchEvent(new Event('blur'));

    expect(input.validationMessage).toBe('');
  });

  it('should mark control invalid for weak password', () => {
    component.password.setValue('abcdef');

    expect(component.password.invalid).toBe(true);
    expect(component.password.errors).toHaveProperty('passwordCheck');
  });

  it('should mark control valid for strong password', () => {
    component.password.setValue('abc12345');

    expect(component.password.valid).toBe(true);
    expect(component.password.errors).toBeNull();
  });

  it('should allow empty value (required handled separately)', () => {
    component.password.setValue('');

    expect(component.password.valid).toBe(true);
    expect(component.password.errors).toBeNull();
  });
});
