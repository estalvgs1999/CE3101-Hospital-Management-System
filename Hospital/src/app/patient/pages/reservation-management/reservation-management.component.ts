import { Component, OnInit } from '@angular/core';
import { Procedure } from '../../interfaces/procedure';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.sass']
})
export class ReservationManagementComponent implements OnInit {

  procedureList: any;
  edit = false;
  add = false;
  patient = {dni: 209876, name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  proceduresNameList: any;
  procedureNameSelectList: any[] = [];

  constructor() {
    this.procedureList = [
      {arrivalDate: '23-04-2020', departureDate: '05-05-2020', procedures: ['uno', 'dos', 'tres', 'cuatro']},
      {arrivalDate: '23-04-2020', departureDate: '05-05-2020', procedures: ['uno', 'dos', 'tres', 'cuatro']},
      {arrivalDate: '23-04-2020', departureDate: '05-05-2020', procedures: ['uno', 'dos', 'tres', 'cuatro']},
      {arrivalDate: '23-04-2020', departureDate: '05-05-2020', procedures: ['uno', 'dos', 'tres', 'cuatro']},
      {arrivalDate: '23-04-2020', departureDate: '05-05-2020', procedures: ['uno', 'dos', 'tres', 'cuatro']},
    ];
    this.proceduresNameList = [
      {name: 'jndjcd'},
      {name: 'jbgbgbgb'},
      {name: 'jnd456jcd'},
      {name: 'jndjcnmmmmmd'},
      {name: 'jndjccccccd'},
    ];
  }

  ngOnInit() {
  }

  editProcedure() {
    this.edit = true;
  }

  back() {
    this.edit = false;
    this.add = false;
  }

  // Add a procedure in the list for send to Data Base
  getProcedureValue(value: Procedure[]): void {
    const i = this.procedureNameSelectList.indexOf(value);

    if (i === -1) {
      this.procedureNameSelectList.push(value);
    }

  }

  // Delete a procedure for the list
  deleteProcedure(value: Procedure): void {
    const i = this.procedureNameSelectList.indexOf(value);

    if (i !== -1) {
      this.procedureNameSelectList.splice(i, 1);
    }
  }

}
