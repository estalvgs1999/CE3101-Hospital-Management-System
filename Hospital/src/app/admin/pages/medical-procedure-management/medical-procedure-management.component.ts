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
  nombreProcedure = '';
  procedure: any;

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
    this.nombreProcedure = name;
  }

  procedureCreate() {
    this.viewProcedure = false;
    this.createProcedure = true;
    this.listProcedure = false;
  }

  procedureList() {
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = true;
  }
}
