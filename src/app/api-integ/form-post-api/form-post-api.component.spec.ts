import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostApiComponent } from './form-post-api.component';

describe('FormPostApiComponent', () => {
  let component: FormPostApiComponent;
  let fixture: ComponentFixture<FormPostApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
