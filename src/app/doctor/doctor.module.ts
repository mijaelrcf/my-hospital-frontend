import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCreateComponent } from './components/doctor-create/doctor-create.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';



@NgModule({
  declarations: [DoctorCreateComponent, DoctorListComponent, DoctorEditComponent],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
