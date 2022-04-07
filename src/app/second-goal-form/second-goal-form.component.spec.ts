import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGoalFormComponent } from './second-goal-form.component';

describe('SecondGoalFormComponent', () => {
  let component: SecondGoalFormComponent;
  let fixture: ComponentFixture<SecondGoalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGoalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
