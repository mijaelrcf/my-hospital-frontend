import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialtyListComponent } from './components/specialty-list/specialty-list.component';
import { SpecialtyCreateComponent } from './components/specialty-create/specialty-create.component';
import { SpecialtyEditComponent } from './components/specialty-edit/specialty-edit.component';

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
  {
    path: 'edit/:id',
    component: SpecialtyEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SpecialtyRoutingModule { }
