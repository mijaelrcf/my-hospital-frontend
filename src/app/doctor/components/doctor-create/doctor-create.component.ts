import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DoctorService } from './../../../core/services/doctor/doctor.service';
// import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.scss']
})
export class DoctorCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit() {
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
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      // price: ['', [Validators.required, MyValidators.isPriceValid]],
      // image: [''],
      // description: ['', [Validators.required]],
    });
  }
}
