import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authPathGuard } from './auth-path.guard';

describe('authPathGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authPathGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
