import { Component, OnInit } from '@angular/core';
import { Pathology } from '../../interfaces/Pathology';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.sass']
})
export class PatientRegisterComponent implements OnInit {

  pathology: Pathology;
  pathologyList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Add a pathology to the list
  addPathology(pathologyname: string, medicine: string) {

    this.pathology = {name: pathologyname, treatment: medicine};

    const i = this.pathologyList.indexOf(this.pathology);

    if (i === -1) {
      this.pathologyList.push(this.pathology);
    }
  }

  // Delete a medicine for the list
  deletePathology(value: Pathology): void {
    const i = this.pathologyList.indexOf(value);

    if (i !== -1) {
      this.pathologyList.splice(i, 1);
    }
  }

}
