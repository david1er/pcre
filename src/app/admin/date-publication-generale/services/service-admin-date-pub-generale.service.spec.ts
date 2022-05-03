import { TestBed } from '@angular/core/testing';

import { ServiceAdminDatePubGeneraleService } from './service-admin-date-pub-generale.service';

describe('ServiceAdminDatePubGeneraleService', () => {
  let service: ServiceAdminDatePubGeneraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminDatePubGeneraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
