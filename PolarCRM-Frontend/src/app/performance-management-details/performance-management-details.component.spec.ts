import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceManagementDetailsComponent } from './performance-management-details.component';

describe('PerformanceManagementDetailsComponent', () => {
  let component: PerformanceManagementDetailsComponent;
  let fixture: ComponentFixture<PerformanceManagementDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceManagementDetailsComponent]
    });
    fixture = TestBed.createComponent(PerformanceManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
