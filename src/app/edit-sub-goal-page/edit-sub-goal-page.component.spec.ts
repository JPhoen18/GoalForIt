import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubGoalPageComponent } from './edit-sub-goal-page.component';

describe('EditSubGoalPageComponent', () => {
  let component: EditSubGoalPageComponent;
  let fixture: ComponentFixture<EditSubGoalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubGoalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubGoalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
