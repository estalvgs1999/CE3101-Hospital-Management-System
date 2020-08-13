import { Component, OnInit } from '@angular/core';

import { ProcedureService } from 'src/app/core/services/procedure.service';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-medical-procedure-management',
  templateUrl: './medical-procedure-management.component.html',
  styleUrls: ['./medical-procedure-management.component.sass']
})
export class MedicalProcedureManagementComponent implements OnInit {

  // Variable
  viewProcedure = false;
  createProcedure = false;
  listProcedure = true;
  editProcedure = false;
  nombreProcedure = '';
  procedure: any;
  procedureNAME: any;

  constructor(
    private procedureService: ProcedureService, private router: Router, private patientService: PatientService ) {
  }

  // BD
  ngOnInit() {
    this.procedureService.getAllProcedure().subscribe(
      Response => {
        console.log('res proce', Response);
        this.procedure = Response.body;
      }
    );
  }

  // Funcion que cambia la vista la opcion de ver informacion y recibe el procedimiento médico a examinar.
  procedureView(name) {
    this.viewProcedure = true;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = false;
    this.procedureNAME = name;
  }

  // Funcion que cambia la vista la opcion de crear.
  procedureCreate() {
    this.viewProcedure = false;
    this.createProcedure = true;
    this.listProcedure = false;
    this.editProcedure = false;
  }

  // Funcion que cambia la vista la opcion de lista.
  procedureList() {
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = true;
    this.editProcedure = false;
    window.location.reload();
  }

  // Funcion que cambia la vista la opcion de editar.
  procedureEdit() {
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = true;
  }

  // BD
  // Funcion que cambia la vista la opcion de lista y crea un nuevo procedimeinto médico.
  procedureCrear() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      name: (<HTMLInputElement> document.getElementById('NameNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      time: Number((<HTMLInputElement> document.getElementById('TimeNewData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      description: (<HTMLInputElement> document.getElementById('DesNewData')).value
    };
    this.procedureService.createProcedure(data).subscribe(res => {
      console.log('res server', res);
    });
    this.viewProcedure = false;
    this.createProcedure = false;
    this.listProcedure = true;
    this.editProcedure = false;
    this.procedureService.getAllProcedure().subscribe(
      Response => {
        console.log('res proce', Response);
        this.procedure = Response.body;
      }
    );
  }

  // Funcion que se encarga de realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Funcion que se encarga de sincronizar con la BD de CoTEC
  sincro() {
    this.patientService.syncCotec().subscribe();
  }

  // BD
  // Funcion que cambia la vista la opcion de ver informacion y editar la informacion de un procedimiento médico.
  procedureEditar() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      time: Number((<HTMLInputElement> document.getElementById('TimeData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      description: (<HTMLInputElement> document.getElementById('DesData')).value
    };
    this.procedureService.editProcedure(this.procedureNAME.id, data).subscribe(res => {
      console.log('res server', res);
    });
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.procedureNAME.time = (<HTMLInputElement> document.getElementById('TimeData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.procedureNAME.description = (<HTMLInputElement> document.getElementById('DesData')).value;
    this.viewProcedure = true;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = false;
    this.procedureService.getAllProcedure().subscribe(
      Response => {
        console.log('res proce', Response);
        this.procedure = Response.body;
      }
    );
  }
}
