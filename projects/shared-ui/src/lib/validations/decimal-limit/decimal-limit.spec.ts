import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DecimalLimit } from './decimal-limit';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, DecimalLimit],
  template: `
    <input
      type="text"
      decimalDigits="2"
      [formControl]="amount"
    />
  `
})
class TestComponent {
  amount = new FormControl('');
}

describe('DecimalLimit Directive', () => {
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

  /* ---------- INPUT BEHAVIOR TESTS ---------- */

  it('should allow valid decimal input', () => {
    input.value = '12.34';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('12.34');
  });

  it('should limit digits after decimal', () => {
    input.value = '12.3456';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('12.34');
  });

  it('should allow typing decimal point', () => {
    input.value = '12.';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('12.');
  });

  /* ---------- FORM VALIDATOR TESTS ---------- */

  it('should mark control valid when within decimal limit', () => {
    component.amount.setValue('12.34');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });

  it('should mark control invalid when exceeding decimal limit', () => {
    component.amount.setValue('12.345');

    expect(component.amount.invalid).toBe(true);
    expect(component.amount.errors).toEqual({
      decimalDigits: {
        required: 2,
        actual: 3
      }
    });
  });

  it('should allow integer values', () => {
    component.amount.setValue('123');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });

  it('should allow empty value', () => {
    component.amount.setValue('');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });
});
