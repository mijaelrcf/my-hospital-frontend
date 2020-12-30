import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PatientService } from './../../../core/services/patient/patient.service';
import { DoctorService } from './../../../core/services/doctor/doctor.service';
import { RecordService } from './../../../core/services/record/record.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-add-record',
  templateUrl: './patient-add-record.component.html',
  styleUrls: ['./patient-add-record.component.scss']
})

export class PatientAddRecordComponent implements OnInit {

  form: FormGroup;
  clientId: number;
  patients = [];
  doctors = [];
  hospitalId: number;
  birthDateStr: string;
  // hospitalOptions: Option[];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private recordService: RecordService,
    // private readonly datePipe: DatePipe,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.clientId = params.id;
      this.patientService.get(this.clientId)
      .subscribe(patient => {
        console.log(patient);
        this.form.patchValue({
          patientId: patient.id,
        });
      });
    });
    this.doctorService.getAll()
    .subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const record = this.form.value;
      this.recordService.create(record)
      .subscribe((newRecord) => {
        console.log(newRecord);
        this.router.navigate(['./patient']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      patientId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      recordDate: ['', [Validators.required]],
      doctorId: ['', [Validators.required]],
    });
  }

}
