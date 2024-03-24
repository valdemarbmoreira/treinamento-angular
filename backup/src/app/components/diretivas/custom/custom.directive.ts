import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ttCustom]'
})
export class CustomDirective {

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
  
    private highlight(cor: string| null) {
      this.el.nativeElement.style.backgroundColor = cor;
    }
  }

