import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-procedure-management',
  templateUrl: './medical-procedure-management.component.html',
  styleUrls: ['./medical-procedure-management.component.sass']
})
export class MedicalProcedureManagementComponent implements OnInit {

  viewProcedure = false;
  createProcedure = false;
  listProcedure = true;
  editProcedure = false;
  nombreProcedure = '';
  procedure: any;
  procedureNAME: any;

  constructor() {
    this.procedure = [
      { nombre: 'nombre1', dias: 6 },
      { nombre: 'nombre2', dias: 7 },
      { nombre: 'Cirugía para la lumbalgia', dias: 9 },
      { nombre: 'nombre4', dias: 3 },
    ];
   }

  ngOnInit() {
  }

  procedureView(name: string) {
    this.viewProcedure = true;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = false;
    // BD
    this.nombreProcedure = name;
    this.procedureNAME = { nombre: 'Cirugía para la lumbalgia', dias: 9 };
  }

  procedureCreate() {
    this.viewProcedure = false;
    this.createProcedure = true;
    this.listProcedure = false;
    this.editProcedure = false;
  }

  procedureList() {
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = true;
    this.editProcedure = false;
  }

  procedureEdit() {
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = true;
  }

  // BD
  procedureCrear() {
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = true;
    this.editProcedure = false;
  }

  // BD
  procedureEditar() {
    this.viewProcedure = true;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = false;
  }
}
