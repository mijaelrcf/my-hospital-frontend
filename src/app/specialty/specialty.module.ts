import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialtyListComponent } from './components/specialty-list/specialty-list.component';
import { SpecialtyCreateComponent } from './components/specialty-create/specialty-create.component';
import { SpecialtyEditComponent } from './components/specialty-edit/specialty-edit.component';

import { SpecialtyRoutingModule } from './specialty-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpecialtyListComponent, SpecialtyCreateComponent, SpecialtyEditComponent],
  imports: [
    CommonModule,
    SpecialtyRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SpecialtyModule { }
