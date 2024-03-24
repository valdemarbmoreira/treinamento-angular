import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralComponent } from './structural.component';

describe('StructuralComponent', () => {
  let component: StructuralComponent;
  let fixture: ComponentFixture<StructuralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralComponent]
    });
    fixture = TestBed.createComponent(StructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
