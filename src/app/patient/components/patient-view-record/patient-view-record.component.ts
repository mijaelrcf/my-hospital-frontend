import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecordService } from './../../../core/services/record/record.service';

@Component({
  selector: 'app-patient-view-record',
  templateUrl: './patient-view-record.component.html',
  styleUrls: ['./patient-view-record.component.scss']
})
export class PatientViewRecordComponent implements OnInit {

  records = [];
  id: string;
  displayedColumns: string[] = [
    'id',
    'description',
    'recordDate'
  ];

  constructor(
    private recordService: RecordService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params.id;
      this.fetch(this.id);
    });
  }

  fetch(id: string) {
    this.recordService.getByPatient(id)
    .subscribe(records => {
      console.log(records);
      this.records = records;
    });
  }
}
