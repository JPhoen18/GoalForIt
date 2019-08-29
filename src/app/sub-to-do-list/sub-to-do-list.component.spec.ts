import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubToDoListComponent } from './sub-to-do-list.component';

describe('SubToDoListComponent', () => {
  let component: SubToDoListComponent;
  let fixture: ComponentFixture<SubToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
