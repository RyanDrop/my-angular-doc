import { Component } from '@angular/core';

@Component({
  selector: 'mad-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent {
  aba = 'home';
  showParagraph = true;
  numbers = [1, 2, 3, 4, 5];

  toggleShowParagraph() {
    this.showParagraph = !this.showParagraph;
  }
}
