import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormparentComponent } from './formparent.component';

describe('FormparentComponent', () => {
  let component: FormparentComponent;
  let fixture: ComponentFixture<FormparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
