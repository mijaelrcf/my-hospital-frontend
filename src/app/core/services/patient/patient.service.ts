import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from './../../models/patient.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Patient[]>(`${environment.url_api}/patients/`);
  }

  get(id: number) {
    return this.http.get<Patient>(`${environment.url_api}/patients/${id}`);
  }

  create(patient: Patient) {
    return this.http.post(`${environment.url_api}/patients`, patient);
  }

  update(id: number, changes: Partial<Patient>) {
    return this.http.put(`${environment.url_api}/patients/${id}`, changes);
  }

  delete(id: number) {
    return this.http.delete(`${environment.url_api}/patients/${id}`);
  }
}
