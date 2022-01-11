import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionExampleComponent } from './content-projection-example.component';

describe('ContentProjectionExampleComponent', () => {
  let component: ContentProjectionExampleComponent;
  let fixture: ComponentFixture<ContentProjectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
