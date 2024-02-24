import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { localGuard } from './local.guard';

describe('localGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => localGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
