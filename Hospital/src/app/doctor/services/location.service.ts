import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  // This funtion get a province name
  getProvince( ) {
    return this.httpClient.get('https://ubicaciones.paginasweb.cr/provincias.json');
  }

  // This funtion get a canton name
  getCanton(key: string) {
    return this.httpClient.get('https://ubicaciones.paginasweb.cr/provincia/' + key + '/cantones.json');
  }

  // This funtion get a distrit name
  getDistrit(provincekey: string, cantonkey: string) {
    return this.httpClient.get('https://ubicaciones.paginasweb.cr/provincia/' + provincekey + '/canton/' + cantonkey + '/distritos.json');
  }
}
