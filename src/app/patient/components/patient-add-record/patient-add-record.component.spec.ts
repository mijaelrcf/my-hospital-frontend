import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddRecordComponent } from './patient-add-record.component';

describe('PatientAddRecordComponent', () => {
  let component: PatientAddRecordComponent;
  let fixture: ComponentFixture<PatientAddRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAddRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
