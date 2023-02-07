import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecRezervisanoComponent } from './vec-rezervisano.component';

describe('VecRezervisanoComponent', () => {
  let component: VecRezervisanoComponent;
  let fixture: ComponentFixture<VecRezervisanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VecRezervisanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VecRezervisanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
