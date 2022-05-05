import { TestBed } from '@angular/core/testing';

import { ServiceStepService } from './service-step.service';

describe('ServiceStepService', () => {
  let service: ServiceStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
