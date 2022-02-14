import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[madMouseHighlight]',
})
export class MouseHighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'gray'
    // );
    this.backgroundColor = 'gray';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'transparent';
  }

  // @HostBinding('style.backgroundColor') backgroundColor?: string;

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor!: string;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
