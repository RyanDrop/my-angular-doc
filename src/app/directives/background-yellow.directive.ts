import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[madBackgroundYellow]',
})
export class BackgroundYellowDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  //Permitir acesso direto ao DOM pode tornar seu aplicativo mais vulnerável a ataques XSS. Revise cuidadosamente qualquer uso de ElementRefem seu código. O renderer é uma interface que permite que você manipule o DOM diretamente.
}
