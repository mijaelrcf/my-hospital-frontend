import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';

import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PatientListComponent, PatientCreateComponent, PatientEditComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
