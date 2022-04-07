import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglegoalhubComponent } from './singlegoalhub.component';

describe('SinglegoalhubComponent', () => {
  let component: SinglegoalhubComponent;
  let fixture: ComponentFixture<SinglegoalhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglegoalhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglegoalhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
