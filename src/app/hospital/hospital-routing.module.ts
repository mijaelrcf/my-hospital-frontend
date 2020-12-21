import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { HospitalCreateComponent } from './components/hospital-create/hospital-create.component';
import { HospitalEditComponent } from './components/hospital-edit/hospital-edit.component';

const routes: Routes = [
    {
      path: '',
      component: HospitalListComponent
    },
    {
        path: 'hospital',
        component: HospitalListComponent
    },
    {
        path: 'create',
        component: HospitalCreateComponent
    },
    {
      path: 'edit/:id',
      component: HospitalEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HospitalRoutingModule { }
