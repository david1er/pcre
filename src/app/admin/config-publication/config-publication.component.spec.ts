import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPublicationComponent } from './config-publication.component';

describe('ConfigPublicationComponent', () => {
  let component: ConfigPublicationComponent;
  let fixture: ComponentFixture<ConfigPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
