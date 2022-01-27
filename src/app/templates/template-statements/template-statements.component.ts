import { Component } from '@angular/core';

@Component({
  selector: 'mad-template-statements',
  templateUrl: './template-statements.component.html',
})
export class TemplateStatementsComponent {
  constructor() {
    document.body.style.backgroundColor = 'white';
  }

  changeBackground() {
    const actualBackground =
      document.body.style.backgroundColor === 'white' ? 'gray' : 'white';
    document.body.style.backgroundColor = actualBackground;
  }
}
