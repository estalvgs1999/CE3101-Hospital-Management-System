import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { StaffService } from 'src/app/core/services/staff.service';

@Component({
  selector: 'app-personal-management',
  templateUrl: './personal-management.component.html',
  styleUrls: ['./personal-management.component.sass'],
})
export class PersonalManagementComponent implements OnInit {

  viewPersonal = false;
  createPersonal = false;
  listPersonal = true;
  editPersonal = false;
  dniPersonal = 0;
  personal: any;
  personalDNI: any;

  constructor( private staffService: StaffService ) {
    this.personal = [
      { dni: 1, nombre: 'nombre1', apellido: 'apellido1', role: 'role1' },
      { dni: 2, nombre: 'nombre2', apellido: 'apellido2', role: 'role2' },
      { dni: 5, nombre: 'nombre3', apellido: 'apellido3', role: 'role3' },
      { dni: 7, nombre: 'nombre4', apellido: 'apellido4', role: 'role4' },
    ];
  }

  ngOnInit() {
    this.staffService.getStaff().subscribe(
      Response => {
        console.log('res proce', Response);
        this.personal = Response.body;
      }
    );
  }

  personalView(dni) {
    this.viewPersonal = true;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = false;
    this.personalDNI = dni;
  }

  personalCreate() {
    this.viewPersonal = false;
    this.createPersonal = true;
    this.listPersonal = false;
    this.editPersonal = false;
  }

  personalList() {
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = true;
    this.editPersonal = false;
  }

  personalEdit() {
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = true;
  }

  // BD
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

  // BD
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
      dob: moment((<HTMLInputElement> document.getElementById('DobNewData')).value).format('YYYY-MM-DD'),
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
      startDate: moment((<HTMLInputElement> document.getElementById('DateNewData')).value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
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
