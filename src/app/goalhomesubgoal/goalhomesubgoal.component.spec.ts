import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalhomesubgoalComponent } from './goalhomesubgoal.component';

describe('GoalhomesubgoalComponent', () => {
  let component: GoalhomesubgoalComponent;
  let fixture: ComponentFixture<GoalhomesubgoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalhomesubgoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalhomesubgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
