import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationBEPCComponent } from './consultation-bepc.component';

describe('ConsultationBEPCComponent', () => {
  let component: ConsultationBEPCComponent;
  let fixture: ComponentFixture<ConsultationBEPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationBEPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationBEPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
