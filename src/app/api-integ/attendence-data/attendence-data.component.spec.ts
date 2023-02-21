import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceDataComponent } from './attendence-data.component';

describe('AttendenceDataComponent', () => {
  let component: AttendenceDataComponent;
  let fixture: ComponentFixture<AttendenceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
