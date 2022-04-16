import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageResultatComponent } from './affichage-resultat.component';

describe('AffichageResultatComponent', () => {
  let component: AffichageResultatComponent;
  let fixture: ComponentFixture<AffichageResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageResultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
