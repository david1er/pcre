import { TestBed } from '@angular/core/testing';

import { ServicesPublicResultatBEPCService } from './services-public-resultat-bepc.service';

describe('ServicesPublicResultatBEPCService', () => {
  let service: ServicesPublicResultatBEPCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPublicResultatBEPCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
