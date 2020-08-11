import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  /**
   * Get one patient by the id
   * @param id of the patient
   */
  getOnePatient(id: string) {
    return this.http.get<object>(`${environment.API.HOSPITAL}/patient/${id}`, {observe: 'response'});
  }
  /**
   * Get all the patients
   */
  getAllPatient() {
    return this.http.get(`${environment.API.HOSPITAL}/patient`, {observe: 'response'});
  }
  /**
   * Sync with Cotec API
   */
  syncCotec() {
    return this.http.get(`${environment.API.HOSPITAL}/patient/sync`, {observe: 'response'});
  }
  /**
   * Create a new patient
   * @param data of the patient
   */
  createPatient(data) {
    return this.http.post(`${environment.API.HOSPITAL}/patient`, data, {observe: 'response'});
  }
  login(credentials: object) {
    return this.http.post(`${environment.API.HOSPITAL}/patient/login`, credentials, {observe: 'response'});
  }
}
