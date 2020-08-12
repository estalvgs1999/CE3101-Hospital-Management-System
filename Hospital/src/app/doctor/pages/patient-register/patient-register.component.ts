import { Component, OnInit } from '@angular/core';
import { Pathology } from '../../interfaces/Pathology';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';
import { PathologyService } from 'src/app/core/services/pathology.service';
import { PatientService } from 'src/app/core/services/patient.service';

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
  constructor(private _http: LocationService, private patientService: PatientService, private router: Router ) { }

  ngOnInit() {
    this._http.getProvince().subscribe(data => {
      this.provinces = data;
    });
  }

  // Add a pathology to the list
  addPathology(pathologyname: string, medicine: string) {

    this.pathology = { name: pathologyname, treatment: medicine };

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

  // Send new patient
  send(name: string, lastName: string, dni: number, sex: string, password: string,
       date: string, phone: string, province: string, canton: string, district: string, address: string) {
    let sendSex;
    if (sex === 'Masculino') {
      sendSex = 'male';
    } else {
      sendSex = 'female';
    }
    const dataP = {
      dni: dni.toString(),
      password,
      name,
      lastname: lastName,
      dob: date,
      sex: sendSex,
      phone: phone.toString(),
      province,
      canton,
      district,
      other_signs: address,
      pathologies: this.pathologyList
    };
    console.log('data', dataP);
    this.patientService.createPatient(dataP).subscribe(res => {
      console.log('res create', res);
    });
    this.router.navigateByUrl('/doctor');
  }

  // Funcion que se encarga se realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Get a canto for province
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

  // get a distrit for canton
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
