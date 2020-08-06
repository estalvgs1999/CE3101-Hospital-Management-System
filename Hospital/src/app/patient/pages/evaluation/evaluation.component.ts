import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../../interfaces/evaluation';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.sass'],
})
export class EvaluationComponent implements OnInit {

  constructor(private evaluationServices: EvaluationService) {}

  ranking1 = 0;
  ranking2 = 0;
  ranking3 = 0;

  ngOnInit() {}

  send() {
    console.log(
      Number(this.ranking1),
      Number(this.ranking2),
      Number(this.ranking3)
    );
    const evaluation: Evaluation = {
      cleanHospital: this.ranking2,
      personalRelation: this.ranking1,
      puntuality: this.ranking3,
    };
    this.evaluationServices.createEvaluation(evaluation).subscribe(Response => {
      console.log(Response);
    });
  }
}
