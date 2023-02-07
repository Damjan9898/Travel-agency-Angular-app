import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtkazanoPutovanjeComponent } from './otkazano-putovanje.component';

describe('OtkazanoPutovanjeComponent', () => {
  let component: OtkazanoPutovanjeComponent;
  let fixture: ComponentFixture<OtkazanoPutovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtkazanoPutovanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtkazanoPutovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
