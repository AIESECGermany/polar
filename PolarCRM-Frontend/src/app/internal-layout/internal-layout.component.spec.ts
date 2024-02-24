import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalLayoutComponent } from './internal-layout.component';

describe('InternalLayoutComponent', () => {
  let component: InternalLayoutComponent;
  let fixture: ComponentFixture<InternalLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalLayoutComponent]
    });
    fixture = TestBed.createComponent(InternalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
