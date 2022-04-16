import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilecsvComponent } from './add-filecsv.component';

describe('AddFilecsvComponent', () => {
  let component: AddFilecsvComponent;
  let fixture: ComponentFixture<AddFilecsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFilecsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilecsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
