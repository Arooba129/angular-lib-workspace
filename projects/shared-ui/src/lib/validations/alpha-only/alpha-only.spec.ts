import { AlphaOnly } from './alpha-only';

describe('AlphaOnly Input Directive', () => {
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

  it('removes numeric characters', () => {
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

  it('handles mixed invalid characters', () => {
    input.value = 'He11o@ Wo$rld!';
    directive.onInput();
    expect(input.value).toBe('HeoWorld');
  });

  it('allows empty value', () => {
    input.value = '';
    directive.onInput();
    expect(input.value).toBe('');
  });

  it('keeps value unchanged if already valid', () => {
    input.value = 'Alphabet';
    directive.onInput();
    expect(input.value).toBe('Alphabet');
  });
});
