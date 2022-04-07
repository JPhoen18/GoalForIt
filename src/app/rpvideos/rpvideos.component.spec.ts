import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPVideosComponent } from './rpvideos.component';

describe('RPVideosComponent', () => {
  let component: RPVideosComponent;
  let fixture: ComponentFixture<RPVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
