import { TestBed } from '@angular/core/testing';

import { ServiceAdminResultatBACIService } from './service-admin-resultat-baci.service';

describe('ServiceAdminResultatBACIService', () => {
  let service: ServiceAdminResultatBACIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminResultatBACIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
