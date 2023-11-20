/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PereFilsComponent } from './PereFils.component';

describe('PereFilsComponent', () => {
  let component: PereFilsComponent;
  let fixture: ComponentFixture<PereFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PereFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PereFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
