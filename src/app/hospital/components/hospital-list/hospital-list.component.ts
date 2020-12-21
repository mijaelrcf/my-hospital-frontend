import { Component, OnInit } from '@angular/core';

import { HospitalService } from './../../../core/services/hospital/hospital.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent implements OnInit {

  hospitals = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private hospitalService: HospitalService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.hospitalService.getAll()
    .subscribe(hospitals => {
      this.hospitals = hospitals;
    });
  }

  delete(id: string) {
    this.hospitalService.delete(id)
    .subscribe(rta => {
      console.log('Hospital deleted rta::::', rta);
      if (rta) {
        const index = this.hospitals.findIndex(hospital => hospital.id === id);
        this.hospitals.splice(index, 1);
        this.hospitals = [...this.hospitals];
      }
      // this.fetchhospitals();
    });
  }
}
