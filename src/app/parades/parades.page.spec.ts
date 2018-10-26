import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadesPage } from './parades.page';

describe('ParadesPage', () => {
  let component: ParadesPage;
  let fixture: ComponentFixture<ParadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
