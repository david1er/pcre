import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBACIIComponent } from './step-bacii.component';

describe('StepBACIIComponent', () => {
  let component: StepBACIIComponent;
  let fixture: ComponentFixture<StepBACIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepBACIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBACIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
