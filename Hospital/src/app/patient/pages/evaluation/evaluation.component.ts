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
      clean_hospital:  Number(this.ranking2),
      personal_relation:  Number(this.ranking1),
      punctuality:  Number(this.ranking3),
    };
    console.log('eva', evaluation);
    this.evaluationServices.createEvaluation(evaluation).subscribe(Response => {
      console.log(Response);
    });
  }
}
