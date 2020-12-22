import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewRecordComponent } from './patient-view-record.component';

describe('PatientViewRecordComponent', () => {
  let component: PatientViewRecordComponent;
  let fixture: ComponentFixture<PatientViewRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
