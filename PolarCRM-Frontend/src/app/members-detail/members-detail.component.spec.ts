import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDetailComponent } from './members-detail.component';

describe('MembersDetailComponent', () => {
  let component: MembersDetailComponent;
  let fixture: ComponentFixture<MembersDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersDetailComponent]
    });
    fixture = TestBed.createComponent(MembersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
