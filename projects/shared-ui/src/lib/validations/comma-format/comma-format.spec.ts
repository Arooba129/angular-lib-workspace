import { CommaFormat } from './comma-format';

describe('CommaFormat Directive', () => {

  let input: HTMLInputElement;
  let directive: CommaFormat;

  beforeEach(() => {
    input = document.createElement('input');
    directive = new CommaFormat({ nativeElement: input } as any);
  });

  it('should format number with commas', () => {
    input.value = '1234567';
    directive.onInput();

    expect(input.value).toBe('1,234,567');
  });

  it('should remove non-numeric characters', () => {
    input.value = '12a34b56';
    directive.onInput();

    expect(input.value).toBe('123,456');
  });

  it('should allow decimals when enabled', () => {
    directive.allowDecimal = true;

    input.value = '1234567.89';
    directive.onInput();

    expect(input.value).toBe('1,234,567.89');
  });

  it('should not allow decimals when disabled', () => {
    directive.allowDecimal = false;

    input.value = '1234.56';
    directive.onInput();

    expect(input.value).toBe('123,456');
  });
});
