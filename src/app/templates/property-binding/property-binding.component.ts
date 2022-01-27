import { Component } from '@angular/core';

@Component({
  selector: 'mad-property-binding',
  templateUrl: './property-binding.component.html',
  styles: [
    `
      button[disabled] {
        cursor: not-allowed;
      }
    `,
  ],
})
export class PropertyBindingComponent {
  imageSrc = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageAlt = 'Angular';
  isDisabled = false;

  toggleButton() {
    const buttonDisable = this.isDisabled ? false : true;
    this.isDisabled = buttonDisable;
  }
}
