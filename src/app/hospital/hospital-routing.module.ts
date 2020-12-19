import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { HospitalCreateComponent } from './components/hospital-create/hospital-create.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HospitalRoutingModule { }
