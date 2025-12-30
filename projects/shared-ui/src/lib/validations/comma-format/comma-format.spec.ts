import { CommaFormat } from './comma-format';

describe('CommaFormat Directive', () => {
  let input: HTMLInputElement;
  let directive: CommaFormat;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new CommaFormat({ nativeElement: input } as any);
  });

  it('formats integer value with commas', () => {
    input.value = '1234567';
    directive.onInput();
    expect(input.value).toBe('1,234,567');
  });

  it('limits total digits to 10', () => {
    input.value = '1234567890123';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890');
  });

  it('allows up to 2 decimal digits', () => {
    input.value = '1234567.89';
    directive.onInput();
    expect(input.value).toBe('1,234,567.89');
  });

  it('trims decimal digits beyond 2', () => {
    input.value = '1234.5678';
    directive.onInput();
    expect(input.value).toBe('1,234.56');
  });

  it('removes non-numeric characters', () => {
    input.value = '12a3b4c5';
    directive.onInput();
    expect(input.value).toBe('12,345');
  });

  it('handles decimal without integer part', () => {
    input.value = '.12';
    directive.onInput();
    expect(input.value).toBe('.12');
  });

  it('keeps value unchanged if already formatted', () => {
    input.value = '1,234.56';
    directive.onInput();
    expect(input.value).toBe('1,234.56');
  });
});
