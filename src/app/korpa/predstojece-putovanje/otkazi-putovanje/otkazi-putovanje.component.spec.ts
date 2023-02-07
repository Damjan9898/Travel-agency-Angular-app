import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtkaziPutovanjeComponent } from './otkazi-putovanje.component';

describe('OtkaziPutovanjeComponent', () => {
  let component: OtkaziPutovanjeComponent;
  let fixture: ComponentFixture<OtkaziPutovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtkaziPutovanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtkaziPutovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
