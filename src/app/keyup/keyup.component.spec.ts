/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyupComponent } from './keyup.component';

describe('KeyupComponent', () => {
  let component: KeyupComponent;
  let fixture: ComponentFixture<KeyupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
