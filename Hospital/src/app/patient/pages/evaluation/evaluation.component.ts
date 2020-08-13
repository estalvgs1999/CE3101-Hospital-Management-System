import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation';
import { EvaluationService } from '../../services/evaluation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.sass'],
})
export class EvaluationComponent implements OnInit {

  constructor(private evaluationServices: EvaluationService, private router: Router, private route: ActivatedRoute) {
    // Get patient data
    this.route.queryParams.subscribe( params => {this.dni = params.special; console.log(this.dni); });
  }

  ranking1 = 0;
  ranking2 = 0;
  ranking3 = 0;
  dni: string;
  add: boolean;
  edit: boolean;
  ngOnInit() {}

  // Send data to data base in mongoDB
  send() {
    const evaluation: Evaluation = {
      clean_hospital:  Number(this.ranking2),
      personal_relation:  Number(this.ranking1),
      punctuality:  Number(this.ranking3),
    };
    this.evaluationServices.createEvaluation(evaluation).subscribe(Response => {
      console.log(Response);
    });
    this.router.navigateByUrl(' ');
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

  // Funcion que se encarga se realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
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
