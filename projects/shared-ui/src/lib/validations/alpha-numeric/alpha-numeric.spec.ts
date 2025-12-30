import { AlphaNumeric } from './alpha-numeric';

describe('AlphaNumeric Formatter Directive', () => {
  let input: HTMLInputElement;
  let directive: AlphaNumeric;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new AlphaNumeric({ nativeElement: input } as any);
  });

  it('allows alphanumeric characters', () => {
    input.value = 'User123';
    directive.onInput();
    expect(input.value).toBe('User123');
  });

  it('removes spaces', () => {
    input.value = 'User 123';
    directive.onInput();
    expect(input.value).toBe('User123');
  });

  it('removes special characters', () => {
    input.value = 'User@123!';
    directive.onInput();
    expect(input.value).toBe('User123');
  });

  it('allows numbers only', () => {
    input.value = '12345';
    directive.onInput();
    expect(input.value).toBe('12345');
  });

  it('allows letters only', () => {
    input.value = 'Username';
    directive.onInput();
    expect(input.value).toBe('Username');
  });

  it('allows empty value', () => {
    input.value = '';
    directive.onInput();
    expect(input.value).toBe('');
  });
});
