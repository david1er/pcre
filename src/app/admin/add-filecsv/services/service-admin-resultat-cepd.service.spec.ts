import { TestBed } from '@angular/core/testing';

import { ServiceAdminResultatCEPDService } from './service-admin-resultat-cepd.service';

describe('ServiceAdminResultatCEPDService', () => {
  let service: ServiceAdminResultatCEPDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminResultatCEPDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
