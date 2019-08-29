import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInfoDivComponent } from './web-info-div.component';

describe('WebInfoDivComponent', () => {
  let component: WebInfoDivComponent;
  let fixture: ComponentFixture<WebInfoDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInfoDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInfoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
