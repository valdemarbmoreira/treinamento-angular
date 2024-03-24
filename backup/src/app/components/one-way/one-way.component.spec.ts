import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayComponent } from './one-way.component';

describe('OneWayComponent', () => {
  let component: OneWayComponent;
  let fixture: ComponentFixture<OneWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneWayComponent]
    });
    fixture = TestBed.createComponent(OneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
