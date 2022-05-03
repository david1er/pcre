import { TestBed } from '@angular/core/testing';

import ServiceAdminGestionLogService from './service-admin-gestion-log.service';

describe('ServiceAdminGestionLogService', () => {
  let service: ServiceAdminGestionLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminGestionLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
