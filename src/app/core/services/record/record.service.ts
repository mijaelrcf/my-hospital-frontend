import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Record } from './../../models/record.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RecordService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Record[]>(`${environment.url_api}/records/`);
  }

  get(id: string) {
    return this.http.get<Record>(`${environment.url_api}/records/${id}`);
  }

  create(record: Record) {
    return this.http.post(`${environment.url_api}/records`, record);
  }

  update(id: string, changes: Partial<Record>) {
    return this.http.patch(`${environment.url_api}/records/${id}`, changes);
  }

  delete(id: string) {
    return this.http.delete(`${environment.url_api}/records/${id}`);
  }
}
