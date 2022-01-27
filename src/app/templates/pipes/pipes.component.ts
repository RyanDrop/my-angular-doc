import { Component } from '@angular/core';

@Component({
  selector: 'mad-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  datePipe = new Date();
}
