import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http: HttpClient) { }
  /**
   * Get the pathology
   * @param dniPatient of the patient
   */
  getOnePathology(dniPatient: string) {
    return this.http.get(`${environment.API.HOSPITAL}/pathology/${dniPatient}`, {observe: 'response'});
  }
  createPathologies(data: object) {
    return this.http.post(`${environment.API.HOSPITAL}/pathology`, data, {observe: 'response'});
  }
}
