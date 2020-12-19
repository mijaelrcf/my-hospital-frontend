import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { HospitalCreateComponent } from './components/hospital-create/hospital-create.component';
import { HospitalEditComponent } from './components/hospital-edit/hospital-edit.component';

import { HospitalRoutingModule } from './hospital-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HospitalListComponent, HospitalCreateComponent, HospitalEditComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class HospitalModule { }
