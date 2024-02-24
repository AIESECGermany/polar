import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceManagementComponent } from './performance-management.component';

describe('PerformanceManagementComponent', () => {
  let component: PerformanceManagementComponent;
  let fixture: ComponentFixture<PerformanceManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceManagementComponent]
    });
    fixture = TestBed.createComponent(PerformanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
