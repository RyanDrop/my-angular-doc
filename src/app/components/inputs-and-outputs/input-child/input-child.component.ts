import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-input-child',
  template: `
    <h1>{{ inputExample }}</h1>
    <p>{{ inputExplication }}</p>
  `,
})
export class InputChildComponent {
  @Input() inputExample?: string;
  @Input() inputExplication?: string;
}
