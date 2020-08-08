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
  /**
   * Create a new record
   * @param data of the new record
   */
  createRecord(data:object){
    return this.http.post(`${environment.API.HOSPITAL}/clinical-records`, data, {observe: 'response'});
  }
  /**
   * Update the treatment of the clinical record
   * @param data of the clinical records
   * @param id of the clinical record
   */
  updateRecord(data:object, id:string){
    return this.http.patch(`${environment.API.HOSPITAL}/clinical-records/edit/${id}`, data, {observe: 'response'});
  }
}
