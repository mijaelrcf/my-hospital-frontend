import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PatientService } from './../../../core/services/patient/patient.service';
import { HospitalService } from './../../../core/services/hospital/hospital.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})

export class PatientEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  hospitals = [];
  hospitalId: number;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private hospitalService: HospitalService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      console.log(params.id);
      this.id = params.id;
      this.patientService.get(this.id)
      .subscribe(patient => {
        console.log(patient);
        this.form.patchValue(patient);
      });
    });
    this.hospitalService.getAll()
    .subscribe(hospitals => {
      this.hospitals = hospitals;
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const patient = this.form.value;
      this.patientService.update(this.id, patient)
      .subscribe((newpatient) => {
        console.log(newpatient);
        this.router.navigate(['./patient']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      hospitalId: ['', [Validators.required]],
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      profilePicture: [''],
    });
  }

}
