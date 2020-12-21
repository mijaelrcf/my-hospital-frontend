import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { MyValidators } from './../../../utils/validators';
import { HospitalService } from './../../../core/services/hospital/hospital.service';

@Component({
  selector: 'app-hospital-edit',
  templateUrl: './hospital-edit.component.html',
  styleUrls: ['./hospital-edit.component.scss']
})

export class HospitalEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private hospitalService: HospitalService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      console.log(params.id);
      this.id = params.id;
      this.hospitalService.get(this.id)
      .subscribe(hospital => {
        console.log(hospital);
        this.form.patchValue(hospital);
      });
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const hospital = this.form.value;
      this.hospitalService.update(this.id, hospital)
      .subscribe((newhospital) => {
        console.log(newhospital);
        this.router.navigate(['./hospital']);
      });
    }
    console.log(this.form.value);
  }

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
