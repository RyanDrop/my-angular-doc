import { Component } from '@angular/core';

@Component({
  selector: 'mad-interaction-view-child',
  template: `<p>interaction</p>`,
})
export class InteractionViewChildComponent  {
  
  childMethod() {
    return 'child method';
  }
}