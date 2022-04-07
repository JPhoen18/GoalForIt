import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPWebArticlesComponent } from './rpweb-articles.component';

describe('RPWebArticlesComponent', () => {
  let component: RPWebArticlesComponent;
  let fixture: ComponentFixture<RPWebArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPWebArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPWebArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
