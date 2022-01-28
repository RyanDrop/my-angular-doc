import { Component } from '@angular/core';

@Component({
  selector: 'mad-svg-as-template',
  templateUrl: './svg-as-template.component.html',
})
export class SvgAsTemplateComponent {
  fillColor = 'rgb(115, 200, 200)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
