import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { MyValidators } from './../../../utils/validators';
import { SpecialtyService } from './../../../core/services/specialty/specialty.service';

@Component({
  selector: 'app-specialty-edit',
  templateUrl: './specialty-edit.component.html',
  styleUrls: ['./specialty-edit.component.scss']
})

export class SpecialtyEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private specialtyService: SpecialtyService,
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
      this.specialtyService.get(this.id)
      .subscribe(specialty => {
        console.log(specialty);
        this.form.patchValue(specialty);
      });
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const specialty = this.form.value;
      this.specialtyService.update(this.id, specialty)
      .subscribe((newspecialty) => {
        console.log(newspecialty);
        this.router.navigate(['./specialty']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      avatar: [''],
      // image: [''],
    });
  }

  get name() { return this.form.get('name'); }
}
