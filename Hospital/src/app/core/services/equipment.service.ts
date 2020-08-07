import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }
  /**
   * Get all the equipment
   */
  getAllEquipment() {
    return this.http.get(`${environment.API.HOSPITAL}/medical-equipment`, {observe: 'response'});
  }
  /**
   * Create a medical equipment
   * @param data of the equipment
   */
  createEquipment(data: object) {
    return this.http.post(`${environment.API.HOSPITAL}/medical-equipment`, data, {observe: 'response'});
  }
  /**
   * Update data from the medical equipment
   * @param data of the equipment
   * @param id of the equipment
   */
  updateEquipment(data: object, id: string) {
    return this.http.patch(`${environment.API.HOSPITAL}/medical-equipment/${id}`, data, {observe: 'response'});
  }
}
