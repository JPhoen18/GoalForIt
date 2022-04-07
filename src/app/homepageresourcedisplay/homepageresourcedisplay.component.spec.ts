import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageresourcedisplayComponent } from './homepageresourcedisplay.component';

describe('HomepageresourcedisplayComponent', () => {
  let component: HomepageresourcedisplayComponent;
  let fixture: ComponentFixture<HomepageresourcedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageresourcedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageresourcedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
