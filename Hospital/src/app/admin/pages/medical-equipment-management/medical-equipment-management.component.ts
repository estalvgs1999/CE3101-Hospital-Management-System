import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-equipment-management',
  templateUrl: './medical-equipment-management.component.html',
  styleUrls: ['./medical-equipment-management.component.sass']
})
export class MedicalEquipmentManagementComponent implements OnInit {

  viewEquipment = false;
  createEquipment = false;
  listEquipment = true;
  nameEquipment = '';
  equipment: any;

  constructor() {
    this.equipment = [
      { nombre: 'respiradores artificiales', proveedor: 'proveedor1', cantidad: 7 },
      { nombre: 'nombre2', proveedor: 'proveedor2', cantidad: 2 },
      { nombre: 'nombre3', proveedor: 'proveedor3', cantidad: 5 },
      { nombre: 'nombre4', proveedor: 'proveedor4', cantidad: 9 },
    ];
  }

  ngOnInit() {
  }

  equipmentView(name: string) {
    this.viewEquipment = true;
    this.createEquipment = false;
    this.listEquipment = false;
    this.nameEquipment = name;
  }

  equipmentCreate() {
    this.viewEquipment = false;
    this.createEquipment = true;
    this.listEquipment = false;
  }

  equipmentList() {
    this.viewEquipment = false;
    this.createEquipment = false;
    this.listEquipment = true;
  }
}
