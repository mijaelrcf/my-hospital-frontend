import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientRoutingModule { }
