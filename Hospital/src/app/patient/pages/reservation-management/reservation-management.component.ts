import { Component, OnInit } from '@angular/core';
import { Procedure } from '../../interfaces/procedure';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { BedService } from 'src/app/core/services/bed.service';
import { ProcedureService } from 'src/app/core/services/procedure.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.sass']
})
export class ReservationManagementComponent implements OnInit {

  ReservationList: any;
  edit = false;
  add = false;
  patient: any = {dni: '1-7745-8956', name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  dni: string;
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
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) {
    this.ReservationList = [];
    this.proceduresNameList = [];
  }

  ngOnInit() {
    // Get patient data
    this.route.queryParams.subscribe( params => {this.dni = params.special; console.log(this.dni); });
    this.patientService.getOnePatient(this.dni).subscribe(Response => {
      console.log('patient data', Response);
      this.patient = Response.body;
    });

    // Get bed information
    this.bedService.getAllBeds().subscribe( bedResponse => {
      console.log('beds', bedResponse);
      this.beds = bedResponse.body;
    });
    // Get all history procedure
    this.procedureService.getAllProcedure().subscribe( procedureResponse => {
      this.proceduresNameList = procedureResponse.body;
      this.procedureAddList =  procedureResponse.body;
      console.log('procedure', this.proceduresNameList);
    });
    // Get al reservation for patients
    this.reservationService.getReservationByPatient(this.dni).subscribe( res => {
      console.log('res', res);
      this.ReservationList = res.body;
      // tslint:disable-next-line: forin
      for (const key in res.body) {
        // tslint:disable-next-line: no-string-literal
        console.log(res.body[key]['id']);
        // tslint:disable-next-line: no-string-literal
        this.reservationService.getProcedureByReservation(res.body[key]['id']).subscribe( resP => {
          console.log('procedure res', resP);
          // tslint:disable-next-line: no-string-literal
          this.ReservationList[key]['procedures'] = resP.body;
        });
      }
    });
  }

  // Funcion que se encarga se realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Get information for edit procedure and change the page
  editProcedure(reservation: object, procedureList: object[]) {
    this.editReservation = reservation;
    this.procedureNameSelectList = procedureList;
    console.log('edit', this.editReservation, 'procedure', this.procedureNameSelectList);
    this.edit = true;
    this.patientInformation = false;
  }

  // Return to the princepal view
  back() {
    this.edit = false;
    this.add = false;
    this.patientInformation = true;
  }

  // Change page to the madical histoty
  changeAddMedicalHistory() {
    this.add = true;
    this.patientInformation = false;
  }

  // Sed new information
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

  // Get procedure for patient id
  getProcedureByResId(id: string) {
    this.reservationService.getProcedureByReservation(id).subscribe(res => {
      console.log('res procedure', res);
      return res.body;
    });
  }

  // Delete resrevation
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe( delRes => {
      console.log('delete Response', delRes);
      window.location.reload();
    });
  }

  // Create reservation
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

  // Update reservation information
  updateReservation(newDate: string) {
    const data = {
      ArrivalDate: newDate,
      PatientDni: this.patient.dni,
      Procedures: this.procedureNameSelectList
    };
    // tslint:disable-next-line: no-string-literal
    console.log('data', data, 'id', this.editReservation['id']);
    // tslint:disable-next-line: no-string-literal
    this.reservationService.updateReservation(this.editReservation['id'], data).subscribe( upRess => {
      console.log('update res', upRess);
      window.location.reload();
    });
  }

  // Change view to Evaluation
  changeEvaluation() {
    const navigationExtras = {
      queryParams: {
        // tslint:disable-next-line: no-string-literal
        special: this.dni
      }
    };
    this.router.navigate(['/patient/evaluation'], navigationExtras);
  }

  // Change view to Reservation
  changeReservation() {
    const navigationExtras = {
      queryParams: {
        // tslint:disable-next-line: no-string-literal
        special: this.dni
      }
    };
    this.router.navigate(['/patient/reservation'], navigationExtras);
  }

  // Change view to profile
  changeClinical() {
    const navigationExtras = {
      queryParams: {
        // tslint:disable-next-line: no-string-literal
        special: this.dni
      }
    };
    this.router.navigate(['/patient'], navigationExtras);
  }
}
