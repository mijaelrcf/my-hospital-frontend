import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCreateComponent } from './components/doctor-create/doctor-create.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';

import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorCreateComponent, DoctorListComponent, DoctorEditComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
