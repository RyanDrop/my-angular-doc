import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { InteractionViewChildComponent } from './interaction-view-child/interaction-view-child.component';

@Component({
  selector: 'mad-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements AfterViewInit{
  name = 'Angular';
  family: string[] 
  constructor() {
    this.family = ['Sue', 'Bob', 'Jane', 'Mary'];
  }
  
  addMemberInArray(child: string) {
    console.log(child)
    this.family.push(child);
  }

  @ViewChild('nameInput')nameInput!: ElementRef;

  @ViewChild(InteractionViewChildComponent) childComponent!: InteractionViewChildComponent;

  ngAfterViewInit() {
    this.nameInput.nativeElement.value = 'Ryan!'
    console.log(this.childComponent.childMethod())
  }

}
