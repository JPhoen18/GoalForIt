import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGoalFormComponent } from './first-goal-form.component';

describe('FirstGoalFormComponent', () => {
  let component: FirstGoalFormComponent;
  let fixture: ComponentFixture<FirstGoalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGoalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
