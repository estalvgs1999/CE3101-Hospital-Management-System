import { Component, OnInit } from '@angular/core';
import { Pathology } from '../../interfaces/Pathology';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.sass']
})
export class PatientRegisterComponent implements OnInit {

  pathology: Pathology;
  pathologyList: any[] = [];
  provinces: any;
  provincesKey: string;
  cantons: any;
  distrits: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: LocationService) { }

  ngOnInit() {
    this._http.getProvince().subscribe(data => {
      this.provinces = data;
    });
  }

  // Add a pathology to the list
  addPathology(pathologyname: string, medicine: string) {

    this.pathology = {name: pathologyname, treatment: medicine};

    const i = this.pathologyList.indexOf(this.pathology);

    if (i === -1) {
      this.pathologyList.push(this.pathology);
    }
  }

  // Delete a medicine for the list
  deletePathology(value: Pathology): void {
    const i = this.pathologyList.indexOf(value);

    if (i !== -1) {
      this.pathologyList.splice(i, 1);
    }
  }

send(name: string, lastName: string, dni: number, password: string,
     date: string, phone: string, province: string, canton: string, distrit: string, address: string) {

 console.log(name, lastName, dni, password, date, phone, province, canton, distrit, address);
}

getCanton(cantonId: string) {
 // tslint:disable-next-line: forin
 for (const key in this.provinces) {
   const value = this.provinces[key];
   if (value === cantonId) {
     this.provincesKey = key;
     this._http.getCanton(key).subscribe(data => {
       this.cantons = data;
     });
   }

}
}

getDistrit(distritId: string) {

 // tslint:disable-next-line: forin
 for (const key in this.cantons) {
   const value = this.cantons[key];
   if (value === distritId) {
     this._http.getDistrit(this.provincesKey, key).subscribe(data => {
       this.distrits = data;
     });
   }
 }
}

}
