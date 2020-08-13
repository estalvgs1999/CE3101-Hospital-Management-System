import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { PathologyService } from 'src/app/core/services/pathology.service';
import { ClinicalRecordsService } from 'src/app/core/services/clinical-records.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  patient: object;
  dni: string;
  pathology: any;
  procedureList: any;
  patientInformation = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private pathologyService: PathologyService,
    private recordService: ClinicalRecordsService) {
    this.pathology = [];
    this.procedureList = [];
  }


  ngOnInit() {

    // Get patient data
    this.route.queryParams.subscribe( params => {this.dni = params.special; console.log(this.dni); });
    this.patientService.getOnePatient(this.dni).subscribe(Response => {
      console.log('patient data', Response);
      this.patient = Response.body;
    });
    // Get pathology data
    this.pathologyService.getOnePathology(this.dni).subscribe( Response => {
      console.log('pathology data', Response);
      this.pathology = Response.body;
    });
    // Get medical Record to patient
    this.recordService.getRecordByPatientDni(this.dni).subscribe(
      Response => {
        console.log('records data', Response);
        this.procedureList = Response.body;
      }
    );
  }
  // Change the view to evaluatio
  changeEvaluation() {
    const navigationExtras = {
      queryParams: {
        // tslint:disable-next-line: no-string-literal
        special: this.dni
      }
    };
    this.router.navigate(['/patient/evaluation'], navigationExtras);
  }

  // Funcion que se encarga se realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
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

  // Change view to reservatio
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
