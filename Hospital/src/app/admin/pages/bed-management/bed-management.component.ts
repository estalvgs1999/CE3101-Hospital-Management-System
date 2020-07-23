import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-management',
  templateUrl: './bed-management.component.html',
  styleUrls: ['./bed-management.component.sass']
})
export class BedManagementComponent implements OnInit {

  viewBed = false;
  createBed = false;
  listBed = true;
  editBed = false;
  idBed = 0;
  bed: any;
  bedID: any;
  bedEQUIP: any;

  constructor() {
    this.bed = [
      { id: 1, salon: 7, uci: true },
      { id: 2, salon: 8, uci: false },
      { id: 5, salon: 7, uci: false },
      { id: 7, salon: 9, uci: false },
    ];
   }

  ngOnInit() {
  }

  bedView(id: number) {
    this.viewBed = true;
    this.createBed = false;
    this.listBed = false;
    this.editBed = false;
    // BD
    this.idBed = id;
    this.bedID = { id: 7, salon: 9, uci: false };
    this.bedEQUIP = [ { name: 'equipo1' }, { name: 'equipo2' }, { name: 'equipo3' }];
  }

  bedCreate() {
    this.viewBed = false;
    this.createBed = true;
    this.listBed = false;
    this.editBed = false;
    this.bedEQUIP = null;
  }

  bedList() {
    this.viewBed = false;
    this.createBed = false;
    this.listBed = true;
    this.editBed = false;
  }

  bedEdit() {
    this.viewBed = false;
    this.createBed = false;
    this.listBed = false;
    this.editBed = true;
  }

  // BD
  bedCrear() {
    this.viewBed = false;
    this.createBed = false;
    this.listBed = true;
    this.editBed = false;
  }

  // BD
  bedEditar() {
    this.viewBed = true;
    this.createBed = false;
    this.listBed = false;
    this.editBed = false;
  }
}
