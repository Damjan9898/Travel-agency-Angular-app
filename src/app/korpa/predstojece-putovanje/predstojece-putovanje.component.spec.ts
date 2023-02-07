import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredstojecePutovanjeComponent } from './predstojece-putovanje.component';

describe('PredstojecePutovanjeComponent', () => {
  let component: PredstojecePutovanjeComponent;
  let fixture: ComponentFixture<PredstojecePutovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredstojecePutovanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredstojecePutovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
