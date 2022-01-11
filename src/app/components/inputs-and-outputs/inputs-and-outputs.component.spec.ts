import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsAndOutputsComponent } from './inputs-and-outputs.component';

describe('InputsAndOutputsComponent', () => {
  let component: InputsAndOutputsComponent;
  let fixture: ComponentFixture<InputsAndOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsAndOutputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsAndOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
