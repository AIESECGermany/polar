import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nationalGuard } from './national.guard';

describe('nationalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nationalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
