import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) {}
  /**
   * Get all the procedure
   */
  getAllProcedure() {
    return this.http.get(`${environment.API.HOSPITAL}/medical-procedure`, {observe: 'response'});
  }
  /**
   * Get one procedure
   * @param id of the procedure
   */
  getOneProcedure(id: string) {
    return this.http.get(`${environment.API.HOSPITAL}/medical-procedure/${id}`, {observe: 'response'});
  }
  /**
   * Create one procedure
   * @param data of the procedure
   */
  createProcedure(data: object) {
    return this.http.post(`${environment.API.HOSPITAL}/medical-procedure`, data, {observe: 'response'});
  }
  /**
   * Update the data of the procedure
   * @param id of the procedure
   * @param data of the procedure
   */
  editProcedure(id: string, data: object) {
    return this.http.patch(`${environment.API.HOSPITAL}/medical-procedure/edit/${id}`, data, {observe: 'response'});
  }
}
