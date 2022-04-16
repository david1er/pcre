import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleVolumeListResponseComponent } from './google-volume-list-response.component';

describe('GoogleVolumeListResponseComponent', () => {
  let component: GoogleVolumeListResponseComponent;
  let fixture: ComponentFixture<GoogleVolumeListResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleVolumeListResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleVolumeListResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
