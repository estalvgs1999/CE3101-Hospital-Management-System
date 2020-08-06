import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.sass']
})
export class EvaluationComponent implements OnInit {

  constructor() { }

  labelPosition = 0;

  ngOnInit() {
  }

  send() {
    console.log(this.labelPosition);
  }


}
