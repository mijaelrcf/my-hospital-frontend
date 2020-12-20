import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hospital } from './../../models/hospital.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Hospital[]>(`${environment.url_api}/hospitals/`);
  }

  get(id: string) {
    return this.http.get<Hospital>(`${environment.url_api}/hospitals/${id}`);
  }

  create(hospital: Hospital) {
    return this.http.post(`${environment.url_api}/hospitals`, hospital);
  }

  update(id: string, changes: Partial<Hospital>) {
    return this.http.put(`${environment.url_api}/hospitals/${id}`, changes);
  }

  delete(id: string) {
    return this.http.delete(`${environment.url_api}/hospitals/${id}`);
  }
}
