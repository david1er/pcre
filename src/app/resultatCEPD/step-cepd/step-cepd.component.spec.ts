import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCEPDComponent } from './step-cepd.component';

describe('StepCEPDComponent', () => {
  let component: StepCEPDComponent;
  let fixture: ComponentFixture<StepCEPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCEPDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCEPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
