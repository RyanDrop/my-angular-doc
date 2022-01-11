import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mad-output-child',
  template: `
    <label for="item-input">Adicione um item:</label>
    <input type="text" id="item-input" #newItem />
    <button (click)="addNewItem(newItem.value)">
      Adicione a lista do component pai
    </button>
  `,
  styles: [
    ':host { display: flex; flex-direction: column; align-items: center; } input { margin: 5px 0px; }',
  ],
})
export class OutputChildComponent {
  @Output() newItem = new EventEmitter<string>();

  addNewItem(item: string) {
    this.newItem.emit(item);
  }
}
