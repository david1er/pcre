import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationBACIComponent } from './consultation-baci.component';

describe('ConsultationBACIComponent', () => {
  let component: ConsultationBACIComponent;
  let fixture: ComponentFixture<ConsultationBACIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationBACIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationBACIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
