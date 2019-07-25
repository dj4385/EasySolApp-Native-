import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPagePage } from './item-page.page';

describe('ItemPagePage', () => {
  let component: ItemPagePage;
  let fixture: ComponentFixture<ItemPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
