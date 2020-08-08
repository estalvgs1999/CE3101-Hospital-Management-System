import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }
  /**
   * Get all the member of the staff
   */
  getStaff() {
    return this.http.get(`${environment.API.HOSPITAL}/staff`, {observe: 'response'});
  }
  /**
   * Create a new member
   * @param data of the member
   */
  createMember(data:object) {
    return this.http.post(`${environment.API.HOSPITAL}/staff`, data, {observe: 'response'});
  }
  /**
   * Delete a member of the staff
   * @param id of the member
   */
  deleteMember(id: string) {
    return this.http.delete(`${environment.API.HOSPITAL}/staff/${id}`, {observe: 'response'});
  }
  /**
   * Edit the member data
   * @param data of the member
   * @param id of the member
   */
  editMember(data: object, id: string) {
    return this.http.patch(`${environment.API.HOSPITAL}/staff/edit/${id}`, data, {observe: 'response'});
  }
  /**
   * get one member of the staff
   * @param id of the member
   */
  getMember(id:string){
    return this.http.get(`${environment.API.HOSPITAL}/staff/${id}`, {observe: 'response'});
  }
  /**
   * Login of the staff
   * @param credentials of the user
   */
  login(credentials: object){
    return this.http.post(`${environment.API.HOSPITAL}/staff/login`, credentials, {observe: 'response'});
  }
}
