import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }
  /**
   * Get all rooms
   */
  getAllRooms() {
    return this.http.get(`${environment.API.HOSPITAL}/room`, {observe: 'response'});
  }
  /**
   * Create a new room
   * @param data of the room
   */
  createRoom(data: object) {
    return this.http.post(`${environment.API.HOSPITAL}/room`, data, {observe: 'response'});
  }
  /**
   * Update the data of a room
   * @param data of the room
   * @param id of the room
   */
  updateRoom(data: object, id: string) {
    return this.http.patch(`${environment.API.HOSPITAL}/room/${id}`, data, {observe: 'response'});
  }
  /**
   * delete one room
   * @param id of the room
   */
  deleteRoom(id: string) {
    return this.http.delete(`${environment.API.HOSPITAL}/room/${id}`, {observe: 'response'});
  }
}
