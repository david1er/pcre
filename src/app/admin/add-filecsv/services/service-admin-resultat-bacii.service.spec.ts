import { TestBed } from '@angular/core/testing';

import { ServiceAdminResultatBACIIService } from './service-admin-resultat-bacii.service';

describe('ServiceAdminResultatBACIIService', () => {
  let service: ServiceAdminResultatBACIIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminResultatBACIIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
