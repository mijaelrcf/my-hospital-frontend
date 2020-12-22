import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PatientService } from './../../../core/services/patient/patient.service';
import { RecordService } from './../../../core/services/record/record.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-add-record',
  templateUrl: './patient-add-record.component.html',
  styleUrls: ['./patient-add-record.component.scss']
})

export class PatientAddRecordComponent implements OnInit {

  form: FormGroup;
  patients = [];
  hospitalId: number;
  birthDateStr: string;
  // hospitalOptions: Option[];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private recordService: RecordService,
    // private readonly datePipe: DatePipe,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.patientService.getAll()
    .subscribe(patients => {
      this.patients = patients;
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
      // hospitalId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateRecord: ['', [Validators.required]],
    });
  }

}
