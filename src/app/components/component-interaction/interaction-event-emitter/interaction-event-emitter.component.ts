import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mad-interaction-event-emitter',
  template: ` <div *ngFor="let member of family">
    <p>{{ member }}</p>   
  </div> 
  <button (click)="addMember()">Add Member</button> `,
})
export class InteractionEventEmitterComponent implements OnInit{
  @Input() family?: string[]
  @Output() onFamilyChange = new EventEmitter();

   ngOnInit(): void {  
      console.log(this.family)
   }

    addMember() {
      this.onFamilyChange.emit("Ryan");
    }
}

