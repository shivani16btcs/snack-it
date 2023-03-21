import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSnackDetailComponent } from './get-snack-detail.component';

describe('GetSnackDetailComponent', () => {
  let component: GetSnackDetailComponent;
  let fixture: ComponentFixture<GetSnackDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSnackDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSnackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
