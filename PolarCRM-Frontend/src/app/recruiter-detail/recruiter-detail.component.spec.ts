import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterDetailComponent } from './recruiter-detail.component';

describe('RecruiterDetailComponent', () => {
  let component: RecruiterDetailComponent;
  let fixture: ComponentFixture<RecruiterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterDetailComponent]
    });
    fixture = TestBed.createComponent(RecruiterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
