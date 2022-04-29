import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFile2Component } from './import-file2.component';

describe('ImportFile2Component', () => {
  let component: ImportFile2Component;
  let fixture: ComponentFixture<ImportFile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportFile2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
