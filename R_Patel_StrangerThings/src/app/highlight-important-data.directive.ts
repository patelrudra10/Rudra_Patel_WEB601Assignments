import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  private isHighlighted: boolean = false;
  private initialColour: string;

  @HostBinding('style.border')
  get border() {
    return this.isHighlighted ? '3px solid black' : this.initialColour;
  }
  constructor(private el: ElementRef) {
    this.initialColour = this.el.nativeElement.style.border;
  }

  @HostListener('mousein') onclick() {
    this.isHighlighted = !this.isHighlighted;
  }
  @HostListener('mouseout') onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

}