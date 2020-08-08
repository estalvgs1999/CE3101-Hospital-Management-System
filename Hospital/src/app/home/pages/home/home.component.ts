import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Pathology } from '../../interfaces/pathology';
import { PatientService } from 'src/app/core/services/patient.service';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/core/services/staff.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './css/tooplate-style.css',
    './css/animate.css',
  ],

})
export class HomeComponent implements OnInit {

  provinces: any;
  provincesKey: string;
  cantons: any;
  distrits: any;
  pathology: Pathology;
  pathologyList: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor(
    private _http: LocationService,
    private patientService: PatientService,
    private staffService: StaffService,
    private router: Router) {}

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
       window.location.reload();
  }

  login(user: string, password: string) {
    console.log(user, password);
    const regex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[hospital]+(?:\.[a-zA-Z0-9-]+)*$');
    const credentials = {
      password,
      dni: user
    }
    if (regex.test(user)) {
      console.log('dn', user.split('@')[0]);
      credentials.dni = user.split('@')[0];
      this.staffService.login(credentials).subscribe(
        resLogin2 => {
          console.log('login staff', resLogin2);
          if (resLogin2.body['role'] === 'Administrativo') {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/doctor');
          }
        }
      );
    } else {
      this.patientService.login(credentials).subscribe(
        resLogin => {
          console.log('login Patient', resLogin);
          if (resLogin.status === 201) {
            this.router.navigateByUrl('/patient');
          }
        }
      );
    }
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
