import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionEventEmitterComponent } from './interaction-event-emitter.component';

describe('InteractionEventEmitterComponent', () => {
  let component: InteractionEventEmitterComponent;
  let fixture: ComponentFixture<InteractionEventEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionEventEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
