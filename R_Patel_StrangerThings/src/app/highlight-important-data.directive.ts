import { Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() defaultColor:string="";  
  @Input() highlightedColor:string="";  

@HostBinding('style.border') border:string=this.defaultColor;  

  constructor( private eleRef:ElementRef){}  

  @HostListener('mousein') mousein(eventData:Event){  
      this.border=this.highlightedColor;  
       
  }  

  @HostListener('mouseout') mouseout(eventData:Event){  
      this.border=this.defaultColor;   
  } 
}
