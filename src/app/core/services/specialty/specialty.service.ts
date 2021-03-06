import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Specialty } from './../../models/specialty.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Specialty[]>(`${environment.url_api}/specialties/`);
  }

  get(id: string) {
    return this.http.get<Specialty>(`${environment.url_api}/specialties/${id}`);
  }

  create(specialty: Specialty) {
    return this.http.post(`${environment.url_api}/specialties`, specialty);
  }

  update(id: string, changes: Partial<Specialty>) {
    return this.http.patch(`${environment.url_api}/specialties/${id}`, changes);
  }

  delete(id: string) {
    return this.http.delete(`${environment.url_api}/specialties/${id}`);
  }
}
