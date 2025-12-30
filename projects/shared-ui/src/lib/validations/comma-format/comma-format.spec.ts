import { CommaFormat } from './comma-format';

describe('CommaFormat Directive', () => {
  let input: HTMLInputElement;
  let directive: CommaFormat;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new CommaFormat({ nativeElement: input } as any);
  });

  it('formats integer with commas', () => {
    input.value = '1234567';
    directive.onInput();
    expect(input.value).toBe('1,234,567');
  });

  it('limits integer digits to 10', () => {
    input.value = '1234567890123';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890');
  });

  it('allows typing decimal point', () => {
    input.value = '1234.';
    directive.onInput();
    expect(input.value).toBe('1,234.');
  });

  it('allows decimal digits after integer limit', () => {
    input.value = '1234567890.1';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890.1');
  });

  it('limits decimal digits to 2', () => {
    input.value = '1234567890.1234';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890.12');
  });

  it('formats normal decimal numbers correctly', () => {
    input.value = '1234.56';
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

  it('allows only one decimal point', () => {
    input.value = '12.3.4.5';
    directive.onInput();
    expect(input.value).toBe('12.34');
  });

  it('keeps already formatted value unchanged', () => {
    input.value = '1,234,567,890.12';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890.12');
  });
});
