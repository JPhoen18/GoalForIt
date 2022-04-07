import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditInfoDivComponent } from './reddit-info-div.component';

describe('RedditInfoDivComponent', () => {
  let component: RedditInfoDivComponent;
  let fixture: ComponentFixture<RedditInfoDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditInfoDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditInfoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
