import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from './../../../core/services/specialty/specialty.service';

@Component({
  selector: 'app-specialty-list',
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.scss']
})

export class SpecialtyListComponent implements OnInit {

  specialtys = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private specialtyService: SpecialtyService
  ) { }

  ngOnInit() {
    this.fetch();
  }
  
  fetch() {
    this.specialtyService.getAll()
    .subscribe(specialtys => {
      this.specialtys = specialtys;
    });
  }

  delete(id: string) {
    this.specialtyService.delete(id)
    .subscribe(rta => {
      console.log('specialty deleted rta::::', rta);
      if (rta) {
        const index = this.specialtys.findIndex(specialty => specialty.id === id);
        this.specialtys.splice(index, 1);
        this.specialtys = [...this.specialtys];
      }
      // this.fetchspecialtys();
    });
  }

}
