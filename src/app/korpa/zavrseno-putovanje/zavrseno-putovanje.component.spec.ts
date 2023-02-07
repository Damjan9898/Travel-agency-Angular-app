import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavrsenoPutovanjeComponent } from './zavrseno-putovanje.component';

describe('ZavrsenoPutovanjeComponent', () => {
  let component: ZavrsenoPutovanjeComponent;
  let fixture: ComponentFixture<ZavrsenoPutovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavrsenoPutovanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavrsenoPutovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
