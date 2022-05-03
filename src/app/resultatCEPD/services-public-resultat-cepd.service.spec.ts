import { TestBed } from '@angular/core/testing';

import { ServicesPublicResultatCEPDService } from './services-public-resultat-cepd.service';

describe('ServicesPublicResultatCEPDService', () => {
  let service: ServicesPublicResultatCEPDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPublicResultatCEPDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
