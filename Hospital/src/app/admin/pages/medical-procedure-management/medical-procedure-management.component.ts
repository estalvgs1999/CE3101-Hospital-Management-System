import { Component, OnInit } from '@angular/core';

import { ProcedureService } from 'src/app/core/services/procedure.service';

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

  constructor(
    private procedureService: ProcedureService) {
    this.procedure = [
      { nombre: 'nombre1', dias: 6 },
      { nombre: 'nombre2', dias: 7 },
      { nombre: 'Cirugía para la lumbalgia', dias: 9 },
      { nombre: 'nombre4', dias: 3 },
    ];
  }

  ngOnInit() {
    this.procedureService.getAllProcedure().subscribe(
      Response => {
        console.log('res proce', Response);
        this.procedure = Response.body;
      }
    );
  }

  procedureView(name: any) {
    this.viewProcedure = true;
    this.createProcedure = false;
    this.listProcedure = false;
    this.editProcedure = false;
    this.procedureNAME = name;
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

  // BD 
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
