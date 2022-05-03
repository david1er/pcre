import { TestBed } from '@angular/core/testing';

import { ServiceAdminResultatBEPCService } from './service-admin-resultat-bepc.service';

describe('ServiceAdminResultatBEPCService', () => {
  let service: ServiceAdminResultatBEPCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminResultatBEPCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
