import { TestBed } from '@angular/core/testing';

import { ServiceAdminStatistiqueService } from './service-admin-statistique.service';

describe('ServiceAdminStatistiqueService', () => {
  let service: ServiceAdminStatistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminStatistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
