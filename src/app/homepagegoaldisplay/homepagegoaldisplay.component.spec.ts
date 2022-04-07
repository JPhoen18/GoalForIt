import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagegoaldisplayComponent } from './homepagegoaldisplay.component';

describe('HomepagegoaldisplayComponent', () => {
  let component: HomepagegoaldisplayComponent;
  let fixture: ComponentFixture<HomepagegoaldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagegoaldisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagegoaldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
