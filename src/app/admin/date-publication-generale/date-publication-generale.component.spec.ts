import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePublicationGeneraleComponent } from './date-publication-generale.component';

describe('DatePublicationGeneraleComponent', () => {
  let component: DatePublicationGeneraleComponent;
  let fixture: ComponentFixture<DatePublicationGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePublicationGeneraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePublicationGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
