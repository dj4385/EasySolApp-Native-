import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManLoginPage } from './sales-man-login.page';

describe('SalesManLoginPage', () => {
  let component: SalesManLoginPage;
  let fixture: ComponentFixture<SalesManLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesManLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
