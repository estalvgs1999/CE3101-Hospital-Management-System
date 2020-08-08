import { Component, OnInit } from '@angular/core';
import { Procedure } from '../../interfaces/procedure';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { BedService } from 'src/app/core/services/bed.service';
import { ProcedureService } from 'src/app/core/services/procedure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.sass']
})
export class ReservationManagementComponent implements OnInit {

  ReservationList: any;
  edit = false;
  add = false;
  patient = {dni: '1-7745-8956', name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  proceduresNameList: any;
  procedureAddList: any = [];
  procedureNameSelectList: any[] = [];
  patientInformation = true;
  beds: any = [];
  editReservation: any;

  constructor(
    private reservationService: ReservationService,
    private bedService: BedService,
    private procedureService: ProcedureService,
    private router: Router) {
    this.ReservationList = [
      {arrival_date: '23-04-2020', departure_date: '05-05-2020', bed_id: '2',procedures: [{name: 'uno'},  {name: 'dos'},  {name: 'dos'},  {name: 'cuatro'}]},
      {arrival_date: '23-04-2020', departure_date: '05-05-2020', bed_id: '2',procedures: [{name: 'uno'},  {name: 'dos'},  {name: 'dos'},  {name: 'cuatro'}]},
      {arrival_date: '23-04-2020', departure_date: '05-05-2020', bed_id: '2',procedures: [{name: 'uno'},  {name: 'dos'},  {name: 'dos'},  {name: 'cuatro'}]},
      {arrival_date: '23-04-2020', departure_date: '05-05-2020', bed_id: '2',procedures: [{name: 'uno'},  {name: 'dos'},  {name: 'dos'},  {name: 'cuatro'}]},
      {arrival_date: '23-04-2020', departure_date: '05-05-2020', bed_id: '2',procedures: [ {name: 'uno'},  {name: 'dos'},  {name: 'dos'},  {name: 'cuatro'}]},
    ];
    this.proceduresNameList = [
      {name: 'jndjcd'},
      {name: 'jbgbgbgb'},
      {name: 'jnd456jcd'},
      {name: 'jndjcnmmmmmd'},
      {name: 'jndjccccccd'}
    ];
  }

  ngOnInit() {
    this.bedService.getAllBeds().subscribe( bedResponse => {
      console.log('beds', bedResponse);
      this.beds = bedResponse.body;
    });
    this.procedureService.getAllProcedure().subscribe( procedureResponse => {
      this.proceduresNameList = procedureResponse.body;
      this.procedureAddList =  procedureResponse.body;
      console.log('procedure', this.proceduresNameList);
    });
    this.reservationService.getReservationByPatient(this.patient.dni).subscribe( res => {
      console.log('res', res);
      this.ReservationList = res.body;
      // tslint:disable-next-line: forin
      for (const key in res.body) {
        console.log(res.body[key]['id']);
        this.reservationService.getProcedureByReservation(res.body[key]['id']).subscribe( resP => {
          console.log('procedure res', resP);
          this.ReservationList[key]['procedures'] = resP.body;
        });
      }
    });
  }

  editProcedure(reservation: object, procedureList: object[]) {
    
    this.editReservation = reservation;
    this.procedureNameSelectList = procedureList;
    console.log('edit', this.editReservation, 'procedure',this.procedureNameSelectList);
    this.edit = true;
    this.patientInformation = false;
  }

  back() {
    this.edit = false;
    this.add = false;
    this.patientInformation = true;
  }

  changeAddMedicalHistory() {
    this.add = true;
    this.patientInformation = false;
  }

  sendNewReservation(date: string) {
    console.log(date, this.procedureNameSelectList);
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
  getProcedureByResId(id: string) {
    this.reservationService.getProcedureByReservation(id).subscribe(res => {
      console.log('res procedure', res);
      return res.body;
    });
  }
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe( delRes => {
      console.log('delete Response', delRes);
      window.location.reload();
    });
  }
  createReservation(date: string, bedNumber: string) {
    const data = {
      PatientDni: this.patient.dni,
      BedID: bedNumber,
      ArrivalDate: date,
      Procedures: this.procedureNameSelectList
    };
    console.log('data create', data);
    this.reservationService.createReservation(data).subscribe(addRes => {
      console.log('create Res', addRes);
      window.location.reload();
    });
  }
  updateReservation(newDate: string, id: string) {
    const data = {
      ArrivalDate: newDate,
      PatientDni: this.patient.dni,
      Procedures: this.procedureNameSelectList
    }
    console.log('data', data);
    this.reservationService.updateReservation(id, data).subscribe( upRess => {
      console.log('update res', upRess);
      window.location.reload();
    });
  }
}
