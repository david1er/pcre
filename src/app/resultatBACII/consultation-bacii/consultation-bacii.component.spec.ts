import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationBACIIComponent } from './consultation-bacii.component';

describe('ConsultationBACIIComponent', () => {
  let component: ConsultationBACIIComponent;
  let fixture: ComponentFixture<ConsultationBACIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationBACIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationBACIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
