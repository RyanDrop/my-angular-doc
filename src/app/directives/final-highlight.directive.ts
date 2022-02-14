import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[madFinalHighlight]',
})
export class FinalHighlightDirective implements OnInit {
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  @Input() defaultColor = 'transparent';
  @Input('madFinalHighlight') highlightColor = 'gray';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
