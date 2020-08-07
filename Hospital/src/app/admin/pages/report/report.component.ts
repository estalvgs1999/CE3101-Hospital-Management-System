import { Component, OnInit } from '@angular/core';

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
  cleanlinessData = [0, 0, 0, 0, 0];
  treatmentData = [0, 0, 0, 0, 0];
  puntualityData = [0, 0, 0, 0, 0];
  fivestar: any;
  fourstar: any;
  threestar: any;
  twostar: any;
  onestar: any;

  constructor() {
    this.aseo = [
      { id: 1, nota: 2 },
      { id: 2, nota: 1 },
      { id: 5, nota: 4 },
      { id: 7, nota: 3 },
    ];
    this.trato = [
      { id: 1, nota: 5 },
      { id: 2, nota: 3 },
      { id: 5, nota: 5 },
      { id: 7, nota: 3 },
    ];
    this.puntualidad = [
      { id: 1, nota: 4 },
      { id: 2, nota: 5 },
      { id: 5, nota: 5 },
      { id: 7, nota: 3 },
    ];
  }

  ngOnInit() {
    this.aseo.forEach(element => {
      if (element.nota === 5) {
        this.cleanlinessData[0]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 4) {
        this.cleanlinessData[1]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 3) {
        this.cleanlinessData[2]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 2) {
        this.cleanlinessData[3]++;
      } else {
        this.cleanlinessData[4]++;
      }
    });
    this.trato.forEach(element => {
      if (element.nota === 5) {
        this.treatmentData[0]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 4) {
        this.treatmentData[1]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 3) {
        this.treatmentData[2]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 2) {
        this.treatmentData[3]++;
      } else {
        this.treatmentData[4]++;
      }
    });
    this.puntualidad.forEach(element => {
      if (element.nota === 5) {
        this.puntualityData[0]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 4) {
        this.puntualityData[1]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 3) {
        this.puntualityData[2]++;
      }
      // tslint:disable-next-line: one-line
      else if (element.nota === 2) {
        this.puntualityData[3]++;
      } else {
        this.puntualityData[4]++;
      }
    });
    this.createDoughnut();
  }

  reportCleanliness() {
    this.showCleanlinessStatistics = true;
    this.showTreatmentStatistics = false;
    this.showPuntualityStatistics = false;
  }

  reportTreatment() {
    this.showCleanlinessStatistics = false;
    this.showTreatmentStatistics = true;
    this.showPuntualityStatistics = false;
  }

  reportPuntuality() {
    this.showCleanlinessStatistics = false;
    this.showTreatmentStatistics = false;
    this.showPuntualityStatistics = true;
  }

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
