import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PatientService } from './../../../core/services/patient/patient.service';
import { HospitalService } from './../../../core/services/hospital/hospital.service';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})

export class PatientCreateComponent implements OnInit {

  form: FormGroup;
  hospitals = [];
  hospitalId: number;
  birthDateStr: string;
  // hospitalOptions: Option[];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private hospitalService: HospitalService,
    // private readonly datePipe: DatePipe,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.hospitalService.getAll()
    .subscribe(hospitals => {
      this.hospitals = hospitals;
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.patientService.create(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./patient']);
      });
    }
    console.log(this.form.value);
  }

  // onBirthDateChange($event: any) {
  //   this.birthDateStr = this.datePipe.transform($event, 'MM/dd/yyyy');
  // }

  // uploadFile(event){
  //   const file = event.target.files[0];
  //   const name = 'image.png';
  //   const fileRef = this.storage.ref(name);
  //   const task = this.storage.upload(name, file);

  //   task.snapshotChanges()
  //   .pipe(
  //     finalize(() => {
  //       this.image$ = fileRef.getDownloadURL();
  //       this.image$.subscribe(url => {
  //         console.log(url);
  //         this.form.get('image').setValue(url);
  //       });
  //     })
  //   )
  //   .subscribe();
  // }

  private buildForm() {
    this.form = this.formBuilder.group({
      hospitalId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      profilePicture: [''],
    });
  }

  get hospital() { return this.form.get('hospitalId'); }
  get name() { return this.form.get('name'); }
  get lastName() { return this.form.get('lastName'); }
  get birthdate() { return this.form.get('birthdate'); }
  get address() { return this.form.get('address'); }

}
