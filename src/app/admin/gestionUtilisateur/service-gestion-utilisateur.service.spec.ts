import { TestBed } from '@angular/core/testing';

import { ServiceGestionUtilisateurService } from './service-gestion-utilisateur.service';

describe('ServiceGestionUtilisateurService', () => {
  let service: ServiceGestionUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGestionUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
