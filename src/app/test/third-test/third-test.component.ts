import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-third-test',
  templateUrl: './third-test.component.html',
  styles: [],
})
export class ThirdTestComponent {
  quoteText = '';

  constructor(private testService: TestService) {}

  sendData() {
    this.testService.sendData(this.quoteText);
  }
}
