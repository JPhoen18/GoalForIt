import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgoaldisplaypageComponent } from './subgoaldisplaypage.component';

describe('SubgoaldisplaypageComponent', () => {
  let component: SubgoaldisplaypageComponent;
  let fixture: ComponentFixture<SubgoaldisplaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgoaldisplaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgoaldisplaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
