import { ContainsLowercase } from './contains-lowercase';

describe('ContainsLowercase Formatter Directive', () => {
  let input: HTMLInputElement;
  let directive: ContainsLowercase;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new ContainsLowercase({ nativeElement: input } as any);
  });

  it('allows lowercase letters', () => {
    input.value = 'abc';
    directive.onInput();
    expect(input.value).toBe('abc');
  });

  it('allows uppercase letters', () => {
    input.value = 'ABC';
    directive.onInput();
    expect(input.value).toBe('ABC');
  });

  it('removes numbers', () => {
    input.value = 'abc123';
    directive.onInput();
    expect(input.value).toBe('abc');
  });

  it('removes special characters', () => {
    input.value = 'ab@#c';
    directive.onInput();
    expect(input.value).toBe('abc');
  });

  it('allows mixed case letters', () => {
    input.value = 'AbCde';
    directive.onInput();
    expect(input.value).toBe('AbCde');
  });

  it('allows empty value', () => {
    input.value = '';
    directive.onInput();
    expect(input.value).toBe('');
  });
});
