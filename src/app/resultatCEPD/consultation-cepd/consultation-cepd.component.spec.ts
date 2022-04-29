import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCEPDComponent } from './consultation-cepd.component';

describe('ConsultationCEPDComponent', () => {
  let component: ConsultationCEPDComponent;
  let fixture: ComponentFixture<ConsultationCEPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationCEPDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationCEPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
