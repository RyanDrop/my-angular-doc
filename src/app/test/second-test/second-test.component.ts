import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styles: [],
})
export class SecondTestComponent {
  quoteText = '';

  constructor(private testService: TestService) {}

  sendData() {
    this.testService.sendData(this.quoteText);
  }
}
