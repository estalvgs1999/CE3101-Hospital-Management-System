import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.personal = [
      { dni: 1, nombre: 'nombre1', apellido: 'apellido1', role: 'role1' },
      { dni: 2, nombre: 'nombre2', apellido: 'apellido2', role: 'role2' },
      { dni: 5, nombre: 'nombre3', apellido: 'apellido3', role: 'role3' },
      { dni: 7, nombre: 'nombre4', apellido: 'apellido4', role: 'role4' },
    ];
  }

  ngOnInit() {}

  personalView(dni: number) {
    this.viewPersonal = true;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = false;
    // BD
    this.dniPersonal = dni;
    this.personalDNI = {
      dni: 1,
      nombre: 'nombre1',
      apellido: 'apellido1',
      telefono: 12345678,
      role: 'role1',
      fecha: 123,
      distrito: 'San Nicolas',
      canton: 'Occidental',
      provincia: 'cartago',
      otras: 'linea',
    };
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
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = true;
    this.editPersonal = false;
  }

  // BD
  personalCrear() {
    this.viewPersonal = false;
    this.createPersonal = false;
    this.listPersonal = true;
    this.editPersonal = false;
  }

  // BD
  personalEditar() {
    this.viewPersonal = true;
    this.createPersonal = false;
    this.listPersonal = false;
    this.editPersonal = false;
  }
}
