import { ContainsUppercase } from './contains-uppercase';

describe('ContainsUppercase Formatter Directive', () => {
  let input: HTMLInputElement;
  let directive: ContainsUppercase;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new ContainsUppercase({ nativeElement: input } as any);
  });

  it('allows uppercase letters', () => {
    input.value = 'ABC';
    directive.onInput();
    expect(input.value).toBe('ABC');
  });

  it('allows lowercase letters', () => {
    input.value = 'abc';
    directive.onInput();
    expect(input.value).toBe('abc');
  });

  it('allows mixed case letters', () => {
    input.value = 'AbC';
    directive.onInput();
    expect(input.value).toBe('AbC');
  });

  it('removes numbers', () => {
    input.value = 'ABC123';
    directive.onInput();
    expect(input.value).toBe('ABC');
  });

  it('removes special characters', () => {
    input.value = 'AB@#C';
    directive.onInput();
    expect(input.value).toBe('ABC');
  });

  it('allows empty value', () => {
    input.value = '';
    directive.onInput();
    expect(input.value).toBe('');
  });
});
