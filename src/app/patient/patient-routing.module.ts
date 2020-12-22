import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientAddRecordComponent } from './components/patient-add-record/patient-add-record.component';
import { PatientViewRecordComponent } from './components/patient-view-record/patient-view-record.component';

const routes: Routes = [
    {
      path: '',
      component: PatientListComponent
    },
    {
        path: 'patient',
        component: PatientListComponent
    },
    {
        path: 'create',
        component: PatientCreateComponent
    },
    {
      path: 'edit/:id',
      component: PatientEditComponent
    },
    {
      path: 'viewRecord/:id',
      component: PatientViewRecordComponent
    },
    {
      path: 'addRecord/:id',
      component: PatientAddRecordComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientRoutingModule { }
