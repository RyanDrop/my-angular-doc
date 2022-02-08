import { Component } from '@angular/core';

@Component({
  selector: 'mad-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
})
export class AttributeDirectivesComponent {
  paint = false;

  onClick() {
    this.paint = !this.paint;
  }
}
