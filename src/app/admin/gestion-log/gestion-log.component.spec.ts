import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLogComponent } from './gestion-log.component';

describe('GestionLogComponent', () => {
  let component: GestionLogComponent;
  let fixture: ComponentFixture<GestionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
