import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HospitalService } from './../../../core/services/hospital/hospital.service';


@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.scss']
})
export class HospitalCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private hospitalService: HospitalService,
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
      this.hospitalService.create(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./hospital']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
}
