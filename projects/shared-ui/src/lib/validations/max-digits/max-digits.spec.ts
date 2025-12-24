import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MaxDigits } from './max-digits';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, MaxDigits],
  template: `
    <input
      type="text"
      maxDigits="5"
      [formControl]="amount"
    />
  `
})
class TestComponent {
  amount = new FormControl('');
}

describe('MaxDigits Directive', () => {
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


  it('should limit input to max digits', () => {
    input.value = '123456789';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('12345');
  });

  it('should remove non-numeric characters', () => {
    input.value = '12ab34!!';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('1234');
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
      maxDigits: {
        required: 5,
        actual: 6
      }
    });
  });

  it('should allow empty value', () => {
    component.amount.setValue('');

    expect(component.amount.valid).toBe(true);
    expect(component.amount.errors).toBeNull();
  });
});
