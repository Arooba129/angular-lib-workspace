import { CommaFormat } from './comma-format';

describe('CommaFormat Directive', () => {
  let input: HTMLInputElement;
  let directive: CommaFormat;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new CommaFormat({ nativeElement: input } as any);
  });

  it('formats integer with commas up to 10 digits', () => {
    input.value = '1234567890';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890');
  });

  it('does not allow more than 10 integer digits', () => {
    input.value = '1234567890123';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890');
  });

  it('allows decimal after 10 integer digits', () => {
    input.value = '1234567890.1';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890.1');
  });

  it('limits decimal digits to 2', () => {
    input.value = '1234567890.1234';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890.12');
  });

  it('allows integer with two decimal digits', () => {
    input.value = '1234.56';
    directive.onInput();
    expect(input.value).toBe('1,234.56');
  });

  it('removes non-numeric characters', () => {
    input.value = '12a3b4c5d6';
    directive.onInput();
    expect(input.value).toBe('123,456');
  });

  it('handles decimal without integer part', () => {
    input.value = '.12';
    directive.onInput();
    expect(input.value).toBe('.12');
  });

  it('keeps already formatted value unchanged', () => {
    input.value = '1,234,567,890.12';
    directive.onInput();
    expect(input.value).toBe('1,234,567,890.12');
  });
});
