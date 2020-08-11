import { Component, OnInit } from '@angular/core';

import { SalonService } from 'src/app/core/services/salon.service';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-salon-management',
  templateUrl: './salon-management.component.html',
  styleUrls: ['./salon-management.component.sass']
})
export class SalonManagementComponent implements OnInit {

  // Variable
  viewSalon = false;
  createSalon = false;
  listSalon = true;
  editSalon = false;
  idSalon = 0;
  salon: any;
  salonID: any;
  types = ['women', 'man', 'children'];

  constructor( private salonService: SalonService, private router: Router, private patientService: PatientService ) {
   }

   // BD
  ngOnInit() {
    this.salonService.getAllRooms().subscribe(
      Response => {
        console.log('res proce', Response);
        this.salon = Response.body;
      }
    );
  }

  // Funcion que cambia la vista la opcion de ver informacion y recibe el salon.
  salonView(salon) {
    this.viewSalon = true;
    this.createSalon = false;
    this.listSalon = false;
    this.editSalon = false;
    this.salonID = salon;
    for (let aux = 0; aux <= this.types.length; aux++) {
      if (this.types[aux] === this.salonID.type) {
        [this.types[0], this.types[aux]] = [this.types[aux], this.types[0]];
        break;
      }
    }
  }

  // Funcion que cambia la vista la opcion de crear.
  salonCreate() {
    this.viewSalon = false;
    this.createSalon = true;
    this.listSalon = false;
    this.editSalon = false;
  }

  // Funcion que cambia la vista la opcion de lista.
  salonList() {
    this.viewSalon = false;
    this.createSalon = false;
    this.listSalon = true;
    this.editSalon = false;
    window.location.reload();
  }

  // Funcion que cambia la vista la opcion de editar.
  salonEdit() {
    this.viewSalon = false;
    this.createSalon = false;
    this.listSalon = false;
    this.editSalon = true;
  }

  // BD
  // Funcion que elimina un salon.
  salonDelete() {
    this.viewSalon = false;
    this.createSalon = false;
    this.listSalon = true;
    this.editSalon = false;
    this.salonService.deleteRoom(this.salonID.id).subscribe( response => {
      console.log('delete', response);
    });
  }

  // Funcion que se encarga de cerrar de sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Funcion que se encarga de sincronizar con la BD de CoTEC
  sincro() {
    this.patientService.syncCotec().subscribe();
  }

  // BD
  // Funcion que cambia la vista la opcion de lista y crea un salon.
  salonCrear() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      ID: Number((<HTMLInputElement> document.getElementById('IdNewData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Name: (<HTMLInputElement> document.getElementById('NameNewData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      BedsQty: Number((<HTMLInputElement> document.getElementById('BedsNewData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Floor: Number((<HTMLInputElement> document.getElementById('FloorNewData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Type: (<HTMLInputElement> document.getElementById('TypeNewData')).value
    };
    console.log('data to send', data);
    this.salonService.createRoom(data).subscribe( Response => {
      console.log('response', Response);
    });
    this.viewSalon = false;
    this.createSalon = false;
    this.listSalon = true;
    this.editSalon = false;
    this.salonService.getAllRooms().subscribe(
      Response => {
        console.log('res proce', Response);
        this.salon = Response.body;
      }
    );
  }

  // BD
  // Funcion que cambia la vista la opcion de ver informacion y edita la informacion.
  salonEditar() {
    const data = {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Name: (<HTMLInputElement> document.getElementById('NameData')).value,
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      BedsQty: Number((<HTMLInputElement> document.getElementById('BedsData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Floor: Number((<HTMLInputElement> document.getElementById('FloorData')).value),
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      Type: (<HTMLInputElement> document.getElementById('TypeData')).value
    };
    this.salonService.updateRoom(data, this.salonID.id).subscribe( res => {
      console.log('edit', res);
    });
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.salonID.name = (<HTMLInputElement> document.getElementById('NameData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.salonID.beds_qty = (<HTMLInputElement> document.getElementById('BedsData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.salonID.floor = (<HTMLInputElement> document.getElementById('FloorData')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.salonID.type = (<HTMLInputElement> document.getElementById('TypeData')).value;
    this.viewSalon = true;
    this.createSalon = false;
    this.listSalon = false;
    this.editSalon = false;
    this.salonService.getAllRooms().subscribe(
      Response => {
        console.log('res proce', Response);
        this.salon = Response.body;
      }
    );
  }
}
