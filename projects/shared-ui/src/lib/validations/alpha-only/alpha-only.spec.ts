import { AlphaOnly } from './alpha-only';

describe('AlphaOnly Formatter Directive', () => {
  let input: HTMLInputElement;
  let directive: AlphaOnly;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new AlphaOnly({ nativeElement: input } as any);
  });

  it('allows alphabetic characters', () => {
    input.value = 'HelloWorld';
    directive.onInput();
    expect(input.value).toBe('HelloWorld');
  });

  it('removes numbers', () => {
    input.value = 'Hello123';
    directive.onInput();
    expect(input.value).toBe('Hello');
  });

  it('removes special characters', () => {
    input.value = 'Hello@#';
    directive.onInput();
    expect(input.value).toBe('Hello');
  });

  it('removes spaces', () => {
    input.value = 'Hello World';
    directive.onInput();
    expect(input.value).toBe('HelloWorld');
  });

  it('allows empty value', () => {
    input.value = '';
    directive.onInput();
    expect(input.value).toBe('');
  });
});
