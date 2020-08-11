import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EvaluationService } from 'src/app/patient/services/evaluation.service';
import { PatientService } from 'src/app/core/services/patient.service';

declare var require: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass'],
})
export class ReportComponent implements OnInit {
  // Change report type
  showCleanlinessStatistics = false;
  showTreatmentStatistics = false;
  showPuntualityStatistics = false;
  aseo: any;
  trato: any;
  puntualidad: any;
  all: any = [];
  cleanlinessData = [0, 0, 0, 0, 0];
  treatmentData = [0, 0, 0, 0, 0];
  puntualityData = [0, 0, 0, 0, 0];
  fivestar: any;
  fourstar: any;
  threestar: any;
  twostar: any;
  onestar: any;

  constructor( private evaluationSevice: EvaluationService, private router: Router, private patientService: PatientService) {
  }

  // BD
  ngOnInit() {
    this.evaluationSevice.getAll().subscribe(
      response => {
        console.log('response', response);
        this.all = response.body;
        this.all.forEach(element => {
          console.log(element);
          if (element.clean_hospital === 5) {
            this.cleanlinessData[0]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.clean_hospital === 4) {
            this.cleanlinessData[1]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.clean_hospital === 3) {
            this.cleanlinessData[2]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.clean_hospital === 2) {
            this.cleanlinessData[3]++;
          } else {
            this.cleanlinessData[4]++;
          }
          if (element.personal_relation === 5) {
            this.treatmentData[0]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.personal_relation === 4) {
            this.treatmentData[1]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.personal_relation === 3) {
            this.treatmentData[2]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.personal_relation === 2) {
            this.treatmentData[3]++;
          } else {
            this.treatmentData[4]++;
          }
          if (element.punctuality === 5) {
            this.puntualityData[0]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.punctuality === 4) {
            this.puntualityData[1]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.punctuality === 3) {
            this.puntualityData[2]++;
          }
          // tslint:disable-next-line: one-line
          else if (element.punctuality === 2) {
            this.puntualityData[3]++;
          } else {
            this.puntualityData[4]++;
          }
        });
        this.createDoughnut();
      }
    );
  }

  // Funcion que cambia la informacion de reporte la opcion de Aseo.
  reportCleanliness() {
    this.showCleanlinessStatistics = true;
    this.showTreatmentStatistics = false;
    this.showPuntualityStatistics = false;
  }

  // Funcion que cambia la informacion de reporte la opcion de Trato.
  reportTreatment() {
    this.showCleanlinessStatistics = false;
    this.showTreatmentStatistics = true;
    this.showPuntualityStatistics = false;
  }

  // Funcion que cambia la informacion de reporte la opcion de Puntualidad.
  reportPuntuality() {
    this.showCleanlinessStatistics = false;
    this.showTreatmentStatistics = false;
    this.showPuntualityStatistics = true;
  }

  // Funcion que se encarga de realizar el cierre de sesion.
  logout() {
    this.router.navigateByUrl('/home');
  }

  // Funcion que se encarga de sincronizar con la BD de CoTEC
  sincro() {
    this.patientService.syncCotec().subscribe();
  }

  // Funcion que crea el grafico.
  createDoughnut() {
    // Create a graphic with the cases
    // tslint:disable-next-line: prefer-const
    let Chart = require('chart.js');
    // tslint:disable-next-line: prefer-const
    let ctx = document.getElementById('myChart');
    // tslint:disable-next-line: prefer-const
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Stars'],
        datasets: [
          {
            label: '# of Votes of Cleanliness',
            data: this.cleanlinessData,
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(255, 99, 132)',
              'rgba(255, 99, 132)',
              'rgba(255, 99, 132)',
              'rgba(255, 99, 132)',
            ],
          },
          {
            label: '# of Votes of Treatment',
            data: this.treatmentData,
            backgroundColor: [
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)',
            ],
          },
          {
            label: '# of Votes of Puntality',
            data: this.puntualityData,
            backgroundColor: [
              'rgba(75, 192, 192)',
              'rgba(75, 192, 192)',
              'rgba(75, 192, 192)',
              'rgba(75, 192, 192)',
              'rgba(75, 192, 192)',
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
