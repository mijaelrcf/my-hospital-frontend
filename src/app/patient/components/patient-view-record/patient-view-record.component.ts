import { Component, OnInit } from '@angular/core';

import { RecordService } from './../../../core/services/record/record.service';

@Component({
  selector: 'app-patient-view-record',
  templateUrl: './patient-view-record.component.html',
  styleUrls: ['./patient-view-record.component.scss']
})
export class PatientViewRecordComponent implements OnInit {

  records = [];
  displayedColumns: string[] = [
    'id',
    'description',
    'recordDate'
  ];

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.recordService.getAll()
    .subscribe(records => {
      this.records = records;
    });
  }
}
