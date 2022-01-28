import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'mad-attribute-class-and-style-bindings',
  templateUrl: './attribute-class-and-style-bindings.component.html',
  styleUrls: ['./attribute-class-and-style-bindings.component.scss'],
})
export class AttributeClassAndStyleBindingsComponent {
  constructor(@Attribute('title') public title: string) {}

  actionName = 'Ryan';
  divStyles = {
    width: '150px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'flex-direction': 'column',
    padding: '10px',
    'margin-top': '10px',
    backgroundColor: '#ccc',
  };
}
