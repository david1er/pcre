import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBEPCComponent } from './step-bepc.component';

describe('StepBEPCComponent', () => {
  let component: StepBEPCComponent;
  let fixture: ComponentFixture<StepBEPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepBEPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBEPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
