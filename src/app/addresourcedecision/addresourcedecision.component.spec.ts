import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresourcedecisionComponent } from './addresourcedecision.component';

describe('AddresourcedecisionComponent', () => {
  let component: AddresourcedecisionComponent;
  let fixture: ComponentFixture<AddresourcedecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresourcedecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresourcedecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
