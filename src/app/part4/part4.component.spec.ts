import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part4Component } from './part4.component';

describe('Part4Component', () => {
  let component: Part4Component;
  let fixture: ComponentFixture<Part4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part4Component]
    });
    fixture = TestBed.createComponent(Part4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});