import { Component } from '@angular/core';

@Component({
  selector: 'mad-text-interpolation',
  template: `<h1>{{ text }}</h1>
    <img src="{{ srcImage }}" />
    <p>1 + 1 = {{ 1 + 1 }}</p>`,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }

      img {
        width: 50px;
      }
    `,
  ],
})
export class TextInterpolationComponent {
  text = 'Hello World!';
  srcImage = 'https://angular.io/assets/images/logos/angular/angular.svg';
}
