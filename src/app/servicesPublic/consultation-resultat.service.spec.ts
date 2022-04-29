import { TestBed } from '@angular/core/testing';

import { ConsultationResultatService } from './consultation-resultat.service';

describe('ConsultationResultatService', () => {
  let service: ConsultationResultatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationResultatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
