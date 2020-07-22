import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-management',
  templateUrl: './salon-management.component.html',
  styleUrls: ['./salon-management.component.sass']
})
export class SalonManagementComponent implements OnInit {

  editSalon = false;
  createSalon = false;
  listSalon = true;
  idBed = 0;

  constructor() { }

  ngOnInit() {
  }

  salonEdit(id: number) {
    this.editSalon = true;
    this.createSalon = false;
    this.listSalon = false;
    this.idBed = id;
  }

  salonCreate() {
    this.editSalon = false;
    this.createSalon = true;
    this.listSalon = false;
  }

  salonList() {
    this.editSalon = false;
    this.createSalon = false;
    this.listSalon = true;
  }

}
