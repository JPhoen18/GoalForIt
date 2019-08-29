import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalpageresourcesComponent } from './goalpageresources.component';

describe('GoalpageresourcesComponent', () => {
  let component: GoalpageresourcesComponent;
  let fixture: ComponentFixture<GoalpageresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule
   ],
      declarations: [ GoalpageresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalpageresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
