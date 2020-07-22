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
  idBed = 0;
  bed: any;

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
    this.idBed = id;
  }

  bedCreate() {
    this.viewBed = false;
    this.createBed = true;
    this.listBed = false;
  }

  bedList() {
    this.viewBed = false;
    this.createBed = false;
    this.listBed = true;
  }

}
