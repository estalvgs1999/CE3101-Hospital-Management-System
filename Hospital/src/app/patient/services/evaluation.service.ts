import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http: HttpClient) { }
  /**
   * Create a new evaluation
   */
  createEvaluation(data: object) {
    return this.http.post(`${environment.API.EVALUATION}`, data, {observe: 'response'});
  }
  /**
   * Get the evaluation of treatment by amount of points
   * @param points of the evaluation
   */
  getTreatment(points: number) {
    return this.http.get(`${environment.API.EVALUATION}/treatment/${points}`, {observe: 'response'});
  }
  /**
   * Get the evaluation of treatment by amount of points
   * @param points of the evaluation
   */
  getClean(points: number) {
    return this.http.get(`${environment.API.EVALUATION}/clean/${points}`, {observe: 'response'});
  }
  /**
   * Get the evaluation of treatment by amount of points
   * @param points of the evaluation
   */
  getPunctuality(points: number) {
    return this.http.get(`${environment.API.EVALUATION}/punctuality/${points}`, {observe: 'response'});
  }
  /**
   * Get all the evaluations
   */
  getAll() {
    return this.http.get(`${environment.API.EVALUATION}`, {observe: 'response'});
  }
}
