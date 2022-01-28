import { Component } from '@angular/core';

@Component({
  selector: 'mad-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.scss'],
})
export class TemplateReferenceVariablesComponent {
  tasks: Array<string> = [];

  addTask(task: string) {
    this.tasks.push(task);
  }
}
