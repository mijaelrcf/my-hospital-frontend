import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from './../../models/doctor.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Doctor[]>(`${environment.url_api}/doctors/`);
  }

  get(id: string) {
    return this.http.get<Doctor>(`${environment.url_api}/doctors/${id}`);
  }

  create(doctor: Doctor) {
    return this.http.post(`${environment.url_api}/doctors`, doctor);
  }

  update(id: string, changes: Partial<Doctor>) {
    return this.http.put(`${environment.url_api}/doctors/${id}`, changes);
  }

  delete(id: string) {
    return this.http.delete(`${environment.url_api}/doctors/${id}`);
  }
}
