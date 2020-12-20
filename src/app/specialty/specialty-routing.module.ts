import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialtyListComponent } from './components/specialty-list/specialty-list.component';
import { SpecialtyCreateComponent } from './components/specialty-create/specialty-create.component';

const routes: Routes = [
    {
      path: '',
      component: SpecialtyListComponent
    },
    {
        path: 'specialty',
        component: SpecialtyListComponent
    },
    {
        path: 'create',
        component: SpecialtyCreateComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SpecialtyRoutingModule { }
