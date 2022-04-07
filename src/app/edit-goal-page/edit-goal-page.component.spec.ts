import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGoalPageComponent } from './edit-goal-page.component';

describe('EditGoalPageComponent', () => {
  let component: EditGoalPageComponent;
  let fixture: ComponentFixture<EditGoalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGoalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
