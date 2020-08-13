import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {
  }
    /**
     * Service methods
     */
    // tslint:disable-next-line: variable-name
    getAvailableBeds(dni: string, arrival_date: string, procedures: any[] ) {
      // tslint:disable-next-line: object-literal-shorthand
      const data = {dni: dni, arrival_date: arrival_date, procedures: procedures};
      return this.http.post(`${environment.API.HOSPITAL}/reservation/check/0`, data, {observe: 'response'});
    }
    getAllReservation() {
      return this.http.get(`${environment.API.HOSPITAL}/reservation`, {observe: 'response'});
    }
    getReservationByPatient(dni) {
      return this.http.get(`${environment.API.HOSPITAL}/reservation/${dni}`, {observe: 'response'});
    }
    getProcedureByReservation(dni) {
      return this.http.get(`${environment.API.HOSPITAL}/reservation/procedures/${dni}`, {observe: 'response'});
    }
    createReservation(data: object) {
      return this.http.post(`${environment.API.HOSPITAL}/reservation`, data, {observe: 'response'});
    }
    deleteReservation(id: string) {
      return this.http.delete(`${environment.API.HOSPITAL}/reservation/${id}`, {observe: 'response'});
    }
    updateReservation(id: string, data: object) {
      return this.http.patch(`${environment.API.HOSPITAL}/reservation/${id}`, data, {observe: 'response'});
    }
}
