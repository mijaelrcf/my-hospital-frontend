import { Component, OnInit } from '@angular/core';

import { PatientService } from './../../../core/services/patient/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {

  patients = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'lastName',
    //'birthdate',
    'address',
    // 'profilePicture',
    'actions'
  ];

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.patientService.getAll()
    .subscribe(patients => {
      this.patients = patients;
    });
  }

  delete(id: string) {
    this.patientService.delete(id)
    .subscribe(rta => {
      console.log('Patient deleted rta::::', rta);
      if (rta) {
        const index = this.patients.findIndex(patient => patient.id === id);
        this.patients.splice(index, 1);
        this.patients = [...this.patients];
      }
      // this.fetchpatients();
    });
  }
}
