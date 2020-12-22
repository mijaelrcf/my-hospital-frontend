import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';

import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientViewRecordComponent } from './components/patient-view-record/patient-view-record.component';
import { PatientAddRecordComponent } from './components/patient-add-record/patient-add-record.component';

@NgModule({
  declarations: [PatientListComponent, PatientCreateComponent, PatientEditComponent, PatientViewRecordComponent, PatientAddRecordComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
