import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionViewChildComponent } from './interaction-view-child.component';

describe('InteractionViewChildComponent', () => {
  let component: InteractionViewChildComponent;
  let fixture: ComponentFixture<InteractionViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
