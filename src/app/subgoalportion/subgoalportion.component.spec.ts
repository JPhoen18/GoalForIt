import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgoalportionComponent } from './subgoalportion.component';

describe('SubgoalportionComponent', () => {
  let component: SubgoalportionComponent;
  let fixture: ComponentFixture<SubgoalportionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgoalportionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgoalportionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
