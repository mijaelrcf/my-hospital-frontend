import { Component, OnInit } from '@angular/core';

import { DoctorService } from './../../../core/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})

export class DoctorListComponent implements OnInit {

  doctors = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.fetch();
  }
  
  fetch() {
    this.doctorService.getAll()
    .subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  delete(id: string) {
    this.doctorService.delete(id)
    .subscribe(rta => {
      console.log('Doctor deleted rta::::', rta);
      if (rta) {
        const index = this.doctors.findIndex(doctor => doctor.id === id);
        this.doctors.splice(index, 1);
        this.doctors = [...this.doctors];
      }
      // this.fetchdoctors();
    });
  }
}
