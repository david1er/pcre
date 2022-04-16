import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionEducativeComponent } from './region-educative.component';

describe('RegionEducativeComponent', () => {
  let component: RegionEducativeComponent;
  let fixture: ComponentFixture<RegionEducativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionEducativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionEducativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
