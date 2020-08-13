import { Component, OnInit } from '@angular/core';

import { EquipmentService } from 'src/app/core/services/equipment.service';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-medical-equipment-management',
  templateUrl: './medical-equipment-management.component.html',
  styleUrls: ['./medical-equipment-management.component.sass']
})
export class MedicalEquipmentManagementComponent implements OnInit {

  // Variables
  viewEquipment = false;
  createEquipment = false;
  listEquipment = true;
  editEquipment = false;
  nameEquipment = '';
  equipment: any;
  equipmentNAME: any;

  constructor(private equipmentService: EquipmentService, private router: Router, private patientService: PatientService ) {
  }

  // BD
  ngOnInit() {
    this.equipmentService.getAllEquipment().subscribe(
      Response => {
        console.log('res proce', Response);
        this.equipment = Response.body;
      }
    );
  }

  // Funcion que cambia la vista la opcion de ver informacion y recibe el equipo que se desea examinar.
  equipmentView(equipo) {
    this.viewEquipment = true;
    this.createEquipment = false;
    this.listEquipment = false;
    this.editEquipment = false;
    this.equipmentNAME = equipo;
  }

  // Funcion que cambia la vista la opcion de crear.
  equipmentCreate() {
    this.viewEquipment = false;
    this.createEquipment = true;
    this.listEquipment = false;
    this.editEquipment = false;
  }

  // Funcion que cambia la vista la opcion de lista.
  equipmentList() {
    this.viewEquipment = false;
    this.createEquipment = false;
    this.listEquipment = true;
    this.editEquipment = false;
    window.location.reload();
  }

  // Funcion que cambia la vista la opcion de editar.
  equipmentEdit() {
    this.viewEquipment = false;
    this.createEquipment = false;
    this.listEquipment = false;
    this.editEquipment = true;
  }

  // BD
  // Funcion que cambia la vista la opcion de lista y crea un equipo médico.
  equipmentCrear() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Name: (<HTMLInputElement> document.getElementById('NameNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Provider: (<HTMLInputElement> document.getElementById('ProNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Qty: Number((<HTMLInputElement> document.getElementById('CanNewData')).value)
    };
    this.equipmentService.createEquipment(data).subscribe(res => {
      console.log('res server', res);
    });
    this.viewEquipment = false;
    this.createEquipment = false;
    this.listEquipment = true;
    this.editEquipment = false;
    this.equipmentService.getAllEquipment().subscribe(
      Response => {
        console.log('res proce', Response);
        this.equipment = Response.body;
      }
    );
  }

  // Funcion que se encarga se realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Funcion que se encarga de sincronizar con la BD de CoTEC
  sincro() {
    this.patientService.syncCotec().subscribe();
  }

  // BD
  // Funcion que cambia la vista la opcion de ver informacion y editar la informacion del equipo médico.
  equipmentEditar() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Provider: (<HTMLInputElement> document.getElementById('ProData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Qty: Number((<HTMLInputElement> document.getElementById('CanData')).value)
    };
    this.equipmentService.updateEquipment(data, this.equipmentNAME.id).subscribe(res => {
      console.log('res server', res);
    });
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.equipmentNAME.provider = (<HTMLInputElement> document.getElementById('ProData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.equipmentNAME.qty = (<HTMLInputElement> document.getElementById('CanData')).value;
    this.viewEquipment = true;
    this.createEquipment = false;
    this.listEquipment = false;
    this.editEquipment = false;
    this.equipmentService.getAllEquipment().subscribe(
      Response => {
        console.log('res proce', Response);
        this.equipment = Response.body;
      }
    );
  }
}
