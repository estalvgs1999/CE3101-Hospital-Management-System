import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicalRecordsService {

  constructor(private http: HttpClient) { }
  /**
   * Get records by a patient
   * @param dniPatient of the patient
   */
  getRecordByPatientDni(dniPatient){
    return this.http.get(`${environment.API.HOSPITAL}/clinical-records/patient/${dniPatient}`, {observe: 'response'});
  }
}
