import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { EmailCheck } from './email-check';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, EmailCheck],
  template: ` <input type="email" emailCheck [formControl]="email" /> `,
})
class TestComponent {
  email = new FormControl('');
}

describe('EmailCheck Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let input: HTMLInputElement;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    input = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  /* ---------- DOM BEHAVIOR TESTS ---------- */

  it('should accept a valid email (DOM)', () => {
    input.value = 'test@example.com';
    input.dispatchEvent(new Event('blur'));

    expect(input.validationMessage).toBe('');
  });

  it('should reject invalid email (DOM)', () => {
    input.value = 'test@';
    input.dispatchEvent(new Event('blur'));

    expect(input.validationMessage).toBe('Invalid email address');
  });

  it('should mark control valid for valid email', () => {
    component.email.setValue('test@example.com');

    expect(component.email.valid).toBe(true);
    expect(component.email.errors).toBeNull();
  });

  it('should mark control invalid for invalid email', () => {
    component.email.setValue('test@');

    expect(component.email.invalid).toBe(true);
    expect(component.email.errors).toEqual({ emailCheck: true });
  });

  it('should allow empty value (required handled separately)', () => {
    component.email.setValue('');

    expect(component.email.valid).toBe(true);
    expect(component.email.errors).toBeNull();
  });
});
