import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorCreateComponent } from './components/doctor-create/doctor-create.component';

const routes: Routes = [
    {
      path: '',
      component: DoctorListComponent
    },
    {
        path: 'doctor',
        component: DoctorListComponent
    },
    {
        path: 'create',
        component: DoctorCreateComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DoctorRoutingModule { }
