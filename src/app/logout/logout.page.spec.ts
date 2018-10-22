import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPage } from './logout.page';

describe('LogoutPage', () => {
  let component: LogoutPage;
  let fixture: ComponentFixture<LogoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
