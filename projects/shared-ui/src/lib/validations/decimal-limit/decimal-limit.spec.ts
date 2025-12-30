import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DecimalLimit } from './decimal-limit';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, DecimalLimit],
  template: `
    <input
      type="text"
      [decimalDigits]="2"
      [formControl]="amount"
    />
  `,
})
class TestComponent {
  amount = new FormControl('');
}

describe('DecimalLimit Directive', () => {
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

  it('should allow valid decimal input', () => {
    component.amount.setValue('12.34');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });

  it('should invalidate when exceeding decimal limit', () => {
    component.amount.setValue('12.345');

    expect(component.amount.invalid).toBe(true);
    expect(component.amount.errors).toEqual({
      decimalDigits: true,
    });
  });

  it('should allow integer values', () => {
    component.amount.setValue('123');

    expect(component.amount.valid).toBe(true);
  });

  it('should allow empty value', () => {
    component.amount.setValue('');

    expect(component.amount.valid).toBe(true);
  });

  it('should allow decimal point with no digits yet', () => {
    component.amount.setValue('12.');

    expect(component.amount.valid).toBe(true);
  });
});
