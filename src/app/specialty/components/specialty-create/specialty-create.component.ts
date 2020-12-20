import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { SpecialtyService } from './../../../core/services/specialty/specialty.service';

@Component({
  selector: 'app-specialty-create',
  templateUrl: './specialty-create.component.html',
  styleUrls: ['./specialty-create.component.scss']
})
export class SpecialtyCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private specialtyService: SpecialtyService,
    private router: Router,
  ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.specialtyService.create(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./specialty']);
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
      //price: ['', [Validators.required, MyValidators.isPriceValid]],
      //image: [''],
      //description: ['', [Validators.required]],
    });
  }
}
