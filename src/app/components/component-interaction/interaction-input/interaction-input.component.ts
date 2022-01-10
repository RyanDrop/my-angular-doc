import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-interaction-input',
  template: `
    <h3>Interaction Example</h3>
    <p>User: {{ name }}</p>
    <p>Age: {{ userAge }}</p>
  `,
})
export class InteractionInputComponent {
  @Input() name?: string;
  @Input('age') userAge: string | undefined;
}
