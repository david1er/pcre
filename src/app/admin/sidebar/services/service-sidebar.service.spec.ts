import { TestBed } from '@angular/core/testing';

import { ServiceSidebarService } from './service-sidebar.service';

describe('ServiceSidebarService', () => {
  let service: ServiceSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
