import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styles: [],
})
export class FirstTestComponent {
  quoteText = '';

  constructor(private testService: TestService) {}

  sendData() {
    this.testService.sendData(this.quoteText);
  }
}
