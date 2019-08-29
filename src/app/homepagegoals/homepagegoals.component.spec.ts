import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagegoalsComponent } from './homepagegoals.component';

describe('HomepagegoalsComponent', () => {
  let component: HomepagegoalsComponent;
  let fixture: ComponentFixture<HomepagegoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagegoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagegoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
