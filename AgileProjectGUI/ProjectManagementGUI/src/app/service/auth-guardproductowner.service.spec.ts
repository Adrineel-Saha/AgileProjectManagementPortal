import { TestBed } from '@angular/core/testing';

import { AuthGuardProductOwnerService } from './auth-guardproductowner.service';

describe('AuthGuardproductownerService', () => {
  let service: AuthGuardProductOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardProductOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
