import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPForumPostsComponent } from './rpforum-posts.component';

describe('RPForumPostsComponent', () => {
  let component: RPForumPostsComponent;
  let fixture: ComponentFixture<RPForumPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPForumPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPForumPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
