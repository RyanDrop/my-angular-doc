import { Component } from '@angular/core';

@Component({
  selector: 'mad-inputs-and-outputs',
  templateUrl: './inputs-and-outputs.component.html',
})
export class InputsAndOutputsComponent {
  inputExplication =
    'O decorator @Input é usado para definir um valor de entrada para um componente filho. Lembrando que o nome recebido no atributo não precisa ser necessariamente igual ao do atributo. Já tenho uma explicação sobre o @Input e @Output na pasta de component interaction.';

  items: string[] = ['Arroz'];

  addItem(item: string) {
    this.items.push(item);
  }
}
