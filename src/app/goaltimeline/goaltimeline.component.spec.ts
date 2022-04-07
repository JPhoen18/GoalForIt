import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaltimelineComponent } from './goaltimeline.component';

describe('GoaltimelineComponent', () => {
  let component: GoaltimelineComponent;
  let fixture: ComponentFixture<GoaltimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoaltimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaltimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
