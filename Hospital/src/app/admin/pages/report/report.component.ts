import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {}

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
}
