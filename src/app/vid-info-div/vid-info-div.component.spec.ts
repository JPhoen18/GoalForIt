import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidInfoDivComponent } from './vid-info-div.component';

describe('VidInfoDivComponent', () => {
  let component: VidInfoDivComponent;
  let fixture: ComponentFixture<VidInfoDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidInfoDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidInfoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
