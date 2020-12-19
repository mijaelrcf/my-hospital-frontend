import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalService } from './services/hospital/hospital.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HospitalService
  ]
})
export class CoreModule { }
