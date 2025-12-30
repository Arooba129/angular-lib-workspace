import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MaxDigits } from './max-digits';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, MaxDigits],
  template: `
    <input
      type="text"
      [maxDigits]="5"
      [formControl]="amount"
    />
  `,
})
class TestComponent {
  amount = new FormControl('');
}

describe('MaxDigits Directive', () => {
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

  it('should mark control valid when within max digits', () => {
    component.amount.setValue('12345');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });

  it('should mark control invalid when exceeding max digits', () => {
    component.amount.setValue('123456');

    expect(component.amount.invalid).toBe(true);
    expect(component.amount.errors).toEqual({
      maxDigits: true,
    });
  });

  it('should ignore non-numeric characters in count', () => {
    component.amount.setValue('12ab34');

    expect(component.amount.valid).toBe(true);
  });

  it('should allow empty value', () => {
    component.amount.setValue('');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });
});
