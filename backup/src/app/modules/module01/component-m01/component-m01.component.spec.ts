import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentM01Component } from './component-m01.component';

describe('ComponentM01Component', () => {
  let component: ComponentM01Component;
  let fixture: ComponentFixture<ComponentM01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentM01Component]
    });
    fixture = TestBed.createComponent(ComponentM01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
