import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[alphaOnlyInput]',
  standalone: true,
})
export class AlphaOnly {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput(): void {
    const input = this.el.nativeElement;
    const cleaned = input.value.replace(/[^A-Za-z]/g, '');

    if (input.value !== cleaned) {
      input.value = cleaned;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}
