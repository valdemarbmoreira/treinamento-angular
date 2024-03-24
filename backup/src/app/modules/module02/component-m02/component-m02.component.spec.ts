import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentM02Component } from './component-m02.component';

describe('ComponentM02Component', () => {
  let component: ComponentM02Component;
  let fixture: ComponentFixture<ComponentM02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentM02Component]
    });
    fixture = TestBed.createComponent(ComponentM02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
