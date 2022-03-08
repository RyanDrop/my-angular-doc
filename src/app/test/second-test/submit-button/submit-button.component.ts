import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styles: [],
})
export class SubmitButtonComponent {
  @Input() hasText?: boolean;
}
