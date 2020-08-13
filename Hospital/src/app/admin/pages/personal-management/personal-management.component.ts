import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { StaffService } from 'src/app/core/services/staff.service';
import { LocationService } from 'src/app/doctor/services/location.service';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';


@Component({
  selector: 'app-personal-management',
  templateUrl: './personal-management.component.html',
  styleUrls: ['./personal-management.component.sass'],
})
export class PersonalManagementComponent implements OnInit {

  // Variables
  viewPersonal = false;
  createPersonal = false;
  listPersonal = true;
  editPersonal = false;
  dniPersonal = 0;
  personal: any;
  personalDNI: any;
  provinces: any;
  provincesKey: string;
  cantons: any;
  distrits: any;
  role = ['Administrador', 'Doctor', 'Enfermero'];

  // tslint:disable-next-line: variable-name
  constructor( private staffService: StaffService,
               // tslint:disable-next-line: variable-name
               private _http: LocationService,
               private router: Router, private patientService: PatientService ) {
  }

  // BD
  ngOnInit() {
    this._http.getProvince().subscribe(data => {
      this.provinces = data;
    });

    this.staffService.getStaff().subscribe(
      Response => {
        console.log('res proce', Response);
        this.personal = Response.body;
      }
    );
  }

  // Funcion obtiene los cantones de una provincia.
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

  // Funcion que cambia la vista la opcion de ver informacion y recibe el personal.
  personalView(dni) {
    this.viewPersonal = true;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = false;
    this.personalDNI = dni;
    for (let aux = 0; aux <= this.role.length; aux++) {
      if (this.role[aux] === this.personalDNI.role) {
        [this.role[0], this.role[aux]] = [this.role[aux], this.role[0]];
        break;
      }
    }
  }

  // Funcion que cambia la vista la opcion de crear.
  personalCreate() {
    this.viewPersonal = false;
    this.createPersonal = true;
    this.listPersonal = false;
    this.editPersonal = false;
  }

  // Funcion que cambia la vista la opcion de lista.
  personalList() {
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = true;
    this.editPersonal = false;
    window.location.reload();
  }

  // Funcion que cambia la vista la opcion de editar.
  personalEdit() {
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = true;
  }

  // BD
  // Funcion que se encarga de eliminar un personal.
  personalDelete() {
    this.staffService.deleteMember(this.personalDNI.dni).subscribe(
      response => {
        console.log('delete', response);
      }
    );
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = true;
    this.editPersonal = false;
    this.staffService.getStaff().subscribe(
      Response => {
        console.log('res proce', Response);
        this.personal = Response.body;
      }
    );
  }

  // Funcion que se encarga de cerrar sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Funcion que se encarga de sincronizar con la BD de CoTEC
  sincro() {
    this.patientService.syncCotec().subscribe();
  }

  // BD
  // Funcion que cambia la vista la opcion de lista y crea un personal.
  personalCrear() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      dni: (<HTMLInputElement> document.getElementById('DniNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      name: (<HTMLInputElement> document.getElementById('NameNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      lastname: (<HTMLInputElement> document.getElementById('LastNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      role: (<HTMLInputElement> document.getElementById('RoleNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      dob: (<HTMLInputElement> document.getElementById('DobNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      phone: (<HTMLInputElement> document.getElementById('PhoneNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      province: (<HTMLInputElement> document.getElementById('ProNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      canton: (<HTMLInputElement> document.getElementById('CantonNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      district: (<HTMLInputElement> document.getElementById('DisNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      otherSigns: (<HTMLInputElement> document.getElementById('OtherNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      startDate: (<HTMLInputElement> document.getElementById('DateNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      username: (<HTMLInputElement> document.getElementById('UserNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      password: (<HTMLInputElement> document.getElementById('PassNewData')).value,
    };
    console.log('data to send', data);
    this.staffService.createMember(data).subscribe(
      response => {
        console.log('response', response);
      }
    );
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = true;
    this.editPersonal = false;
    this.staffService.getStaff().subscribe(
      Response => {
        console.log('res proce', Response);
        this.personal = Response.body;
      }
    );
  }

  // BD
  // Funcion que cambia la vista la opcion de ver informacion y edita la informacion de un personal.
  personalEditar() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      name: (<HTMLInputElement> document.getElementById('NameData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      lastname: (<HTMLInputElement> document.getElementById('LastData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      role: (<HTMLInputElement> document.getElementById('RoleData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      phone: (<HTMLInputElement> document.getElementById('PhoneData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      username: (<HTMLInputElement> document.getElementById('UserData')).value,
    };
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.personalDNI.name = (<HTMLInputElement> document.getElementById('NameData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.personalDNI.lastname = (<HTMLInputElement> document.getElementById('LastData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.personalDNI.role = (<HTMLInputElement> document.getElementById('RoleData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.personalDNI.phone = (<HTMLInputElement> document.getElementById('PhoneData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.personalDNI.phone = (<HTMLInputElement> document.getElementById('UserData')).value;
    this.staffService.editMember(data, this.personalDNI.dni).subscribe(
      res => {
        console.log('edit', res);
      }
    );
    this.viewPersonal = true;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = false;
    this.staffService.getStaff().subscribe(
      Response => {
        console.log('res proce', Response);
        this.personal = Response.body;
      }
    );
  }
}
