import { Component, OnInit } from '@angular/core';

import { BedService } from 'src/app/core/services/bed.service';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { SalonService } from 'src/app/core/services/salon.service';

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
  Equip: any;
  salon: any;
  bedEQUIP: any;

  constructor( private bedService: BedService, private equipmentService: EquipmentService, private salonService: SalonService) {
    this.bed = [
      { id: 1, salon: 7, uci: true },
      { id: 2, salon: 8, uci: false },
      { id: 5, salon: 7, uci: false },
      { id: 7, salon: 9, uci: false },
    ];
   }

  ngOnInit() {
    this.bedService.getAllBeds().subscribe(
      Response => {
        console.log('res proce', Response);
        this.bed = Response.body;
      }
    );
    // BD
    // Equip
    this.equipmentService.getAllEquipment().subscribe(
      Response => {
        console.log('res proce', Response);
        this.Equip = Response.body;
      }
    );
    // salon
    this.salonService.getAllRooms().subscribe(
      Response => {
        console.log('res proce', Response);
        this.salon = Response.body;
      }
    );
  }

  bedView(id) {
    this.viewBed = true;
    this.createBed = false;
    this.listBed = false;
    this.editBed = false;
    this.bedID = id;
    this.bedService.getAllEquipmentByBeds(this.bedID.id).subscribe(
      Response => {
        console.log('response', Response);
        this.bedEQUIP = Response.body;
      }
    );
    for (let aux = 0; aux <= this.salon.length; aux++) {
      if(this.salon[aux].id === this.bedID.room_id) {
        [this.salon[0], this.salon[aux]] = [this.salon[aux], this.salon[0]];
        break;
      }
    }
  }

  bedCreate() {
    this.viewBed = false;
    this.createBed = true;
    this.listBed = false;
    this.editBed = false;
    this.bedEQUIP = [];
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
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      UCI: Boolean((<HTMLInputElement> document.getElementById('UciNewData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      RoomID: Number((<HTMLInputElement> document.getElementById('RoomNewData')).value),
      EquipmentID: this.bedEQUIP
    };
    console.log('data to send', data);
    this.bedService.createBeds(data).subscribe(
      response => {
        console.log('response', response);
      }
    );
    this.viewBed = false;
    this.createBed = false;
    this.listBed = true;
    this.editBed = false;
    this.bedService.getAllBeds().subscribe(
      Response => {
        console.log('res proce', Response);
        this.bed = Response.body;
      }
    );
  }

  // BD
  bedEditar() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      UCI: Boolean((<HTMLInputElement> document.getElementById('UciData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      RoomID: Number((<HTMLInputElement> document.getElementById('RoomData')).value)
    };
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.bedID.uci = (<HTMLInputElement> document.getElementById('UciData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.bedID.room_id = (<HTMLInputElement> document.getElementById('RoomData')).value;
    console.log('data to send', data);
    this.bedService.updateBed(data, this.bedID.id).subscribe(
      response => {
        console.log('response', response);
      }
    );
    this.viewBed = true;
    this.createBed = false;
    this.listBed = false;
    this.editBed = false;
    this.bedService.getAllBeds().subscribe(
      Response => {
        console.log('res proce', Response);
        this.bed = Response.body;
      }
    );
  }

  agregar(data) {
    this.Equip.forEach(element => {
      if (element.name === data.value) {
        this.bedEQUIP.push(element);
      }
    });
  }

  eliminar(data) {
    for (let index = 0; index <= this.bedEQUIP.length; index++) {
      if (this.bedEQUIP[index].name === data) {
        this.bedEQUIP.splice(index, 1);
        break;
      }
    }
  }
}
