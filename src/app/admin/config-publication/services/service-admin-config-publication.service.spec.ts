import { TestBed } from '@angular/core/testing';

import { ServiceAdminConfigPublicationService } from './service-admin-config-publication.service';

describe('ServiceAdminConfigPublicationService', () => {
  let service: ServiceAdminConfigPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminConfigPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
