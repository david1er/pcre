import { TestBed } from '@angular/core/testing';

import { ServiceAdminResultatService } from './service-admin-resultat.service';

describe('ServiceAdminResultatService', () => {
  let service: ServiceAdminResultatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminResultatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
