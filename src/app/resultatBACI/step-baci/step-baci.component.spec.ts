import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBACIComponent } from './step-baci.component';

describe('StepBACIComponent', () => {
  let component: StepBACIComponent;
  let fixture: ComponentFixture<StepBACIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepBACIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBACIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
