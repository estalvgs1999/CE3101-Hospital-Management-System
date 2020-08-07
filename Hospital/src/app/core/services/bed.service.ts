import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BedService {

  constructor(private http: HttpClient) { }
  /**
   * get all the beds
   */
  getAllBeds() {
    return this.http.get(`${environment.API.HOSPITAL}/beds`, {observe: 'response'});
  }
  /**
   * get all the equipment by bed
   */
  getAllEquipmentByBeds(id: string) {
    return this.http.get(`${environment.API.HOSPITAL}/beds/eq/${id}`, {observe: 'response'});
  }
  /**
   * Create a new bed
   * @param data of the bed
   */
  createBeds(data: object) {
    return this.http.post(`${environment.API.HOSPITAL}/beds`, data, {observe: 'response'});
  }
  /**
   * Update a new bed
   * @param data of the bed
   * @param id of the bed
   */
  updateBed(data: object, id: string) {
    return this.http.patch(`${environment.API.HOSPITAL}/beds/${id}`, data, {observe: 'response'});
  }

}
