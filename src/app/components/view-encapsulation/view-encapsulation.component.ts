import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mad-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ViewEncapsulationComponent {}
