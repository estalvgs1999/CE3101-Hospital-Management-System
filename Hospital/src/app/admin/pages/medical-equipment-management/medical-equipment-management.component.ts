import { Component, OnInit } from '@angular/core';

import { EquipmentService } from 'src/app/core/services/equipment.service';

@Component({
  selector: 'app-medical-equipment-management',
  templateUrl: './medical-equipment-management.component.html',
  styleUrls: ['./medical-equipment-management.component.sass']
})
export class MedicalEquipmentManagementComponent implements OnInit {

  viewEquipment = false;
  createEquipment = false;
  listEquipment = true;
  editEquipment = false;
  nameEquipment = '';
  equipment: any;
  equipmentNAME: any;

  constructor(private equipmentService: EquipmentService) {
    this.equipment = [
      { nombre: 'respiradores artificiales', proveedor: 'proveedor1', cantidad: 7 },
      { nombre: 'nombre2', proveedor: 'proveedor2', cantidad: 2 },
      { nombre: 'nombre3', proveedor: 'proveedor3', cantidad: 5 },
      { nombre: 'nombre4', proveedor: 'proveedor4', cantidad: 9 },
    ];
  }

  ngOnInit() {
    this.equipmentService.getAllEquipment().subscribe(
      Response => {
        console.log('res proce', Response);
        this.equipment = Response.body;
      }
    );
  }

  equipmentView(name) {
    this.viewEquipment = true;
    this.createEquipment = false;
    this.listEquipment = false;
    this.editEquipment = false;
    this.equipmentNAME = name;
  }

  equipmentCreate() {
    this.viewEquipment = false;
    this.createEquipment = true;
    this.listEquipment = false;
    this.editEquipment = false;
  }

  equipmentList() {
    this.viewEquipment = false;
    this.createEquipment = false;
    this.listEquipment = true;
    this.editEquipment = false;
  }

  equipmentEdit() {
    this.viewEquipment = false;
    this.createEquipment = false;
    this.listEquipment = false;
    this.editEquipment = true;
  }

  // BD
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

  // BD
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
