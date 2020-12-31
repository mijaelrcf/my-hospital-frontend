import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DoctorService } from './../../../core/services/doctor/doctor.service';
import { HospitalService } from './../../../core/services/hospital/hospital.service';
import { SpecialtyService } from './../../../core/services/specialty/specialty.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.scss']
})
export class DoctorCreateComponent implements OnInit {

  form: FormGroup;
  hospitals = [];
  hospitalId: number;
  specialties = [];
  specialtyId: number;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
    private hospitalService: HospitalService,
    private specialtyService: SpecialtyService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.hospitalService.getAll()
    .subscribe(hospitals => {
      this.hospitals = hospitals;
    });
    this.specialtyService.getAll()
    .subscribe(specialties => {
      this.specialties = specialties;
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.doctorService.create(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./doctor']);
      });
    }
    console.log(this.form.value);
  }

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
      specialtyId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      profilePicture: [''],
    });
  }

  get hospital() { return this.form.get('hospitalId'); }
  get specialty() { return this.form.get('specialtyId'); }
  get name() { return this.form.get('name'); }
  get lastName() { return this.form.get('lastName'); }
  get birthdate() { return this.form.get('birthdate'); }
  get address() { return this.form.get('address'); }
}
