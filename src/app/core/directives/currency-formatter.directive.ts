import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[appCurrencyFormatter]',
  standalone: true
})
export class CurrencyFormatterDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private control: NgControl,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    setTimeout(() => {
      const initialValue = this.control.value;
      if (initialValue) {
        this.formatValue(initialValue);
      }
    });
  }

  @HostListener('ionChange', ['$event'])
  onIonChange(event: any) {
    this.formatValue(event.detail.value);
  }

  @HostListener('focus')
  onFocus() {
    const value = this.control.value;
    if (value !== null && value !== undefined) {
      const plainValue = value.toString().replace(/[^0-9.]/g, '');
      this.control.control?.setValue(plainValue, { emitEvent: false });
    }
  }

  @HostListener('blur')
  onBlur() {
    const value = this.control.value;
    if (value !== null && value !== undefined) {
      this.formatValue(value);
    }
  }

  private formatValue(value: any) {
    if (value === null || value === '') return;
    let numericValue = typeof value === 'string' ? 
      parseFloat(value.replace(/[^0-9.]/g, '')) : 
      parseFloat(value);
    
    if (isNaN(numericValue)) {
      numericValue = 0;
    }
    const formattedValue = this.currencyPipe.transform(numericValue, 'USD', 'symbol', '1.0-0');
    this.control.control?.setValue(numericValue, { emitEvent: false });
    setTimeout(() => {
      const inputElement = this.el.querySelector('input') || this.el;
      inputElement.value = formattedValue || '';
    });
  }
}