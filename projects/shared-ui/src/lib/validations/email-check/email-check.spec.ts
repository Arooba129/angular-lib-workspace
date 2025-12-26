import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { EmailCheck } from './email-check';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, EmailCheck],
  template: `<input emailCheck [formControl]="email" />`,
})
class TestComponent {
  email = new FormControl('');
}

describe('EmailCheck Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should allow a valid email', () => {
    component.email.setValue('test@example.com');

    expect(component.email.valid).toBe(true);
    expect(component.email.errors).toBeNull();
  });

  it('should reject an invalid email', () => {
    component.email.setValue('test@');

    expect(component.email.invalid).toBe(true);
    expect(component.email.errors).toEqual({ emailCheck: true });
  });

  it('should allow empty value (required handled separately)', () => {
    component.email.setValue('');

    expect(component.email.valid).toBe(true);
    expect(component.email.errors).toBeNull();
  });

  it('should reject non-string values', () => {
    component.email.setValue(123 as any);

    expect(component.email.invalid).toBe(true);
    expect(component.email.errors).toEqual({ emailCheck: true });
  });
});
