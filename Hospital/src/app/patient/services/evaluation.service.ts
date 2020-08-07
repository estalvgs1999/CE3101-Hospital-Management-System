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
}
