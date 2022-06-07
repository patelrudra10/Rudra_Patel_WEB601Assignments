import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  private highlight: boolean = false;
  
  private initialBorder: string;
  private initialColor: string;

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.highlight ? this.color || "transparent" :
      this.initialColor;
  }

  @HostBinding('style.border')
  get border() {
    return this.highlight ? '3px solid black' : this.initialBorder;
  }
  constructor(private elm: ElementRef) {
    this.initialBorder = this.elm.nativeElement.style.border;
    this.initialColor = this.elm.nativeElement.style.backgroundColor;
  }
  @HostListener('mousein') onclickTitle() {
    this.highlight = !this.highlight;
  }
  @HostListener('mouseout') onClickTitle() {
    this.highlight = !this.highlight;
  }
  @HostListener('click') onClickType() {
    this.highlight = !this.highlight;
  }
}