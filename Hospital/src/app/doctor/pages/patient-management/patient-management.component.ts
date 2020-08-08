import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.sass']
})
export class PatientManagementComponent implements OnInit {

  patientList: any;
  patient = {dni: 209876, name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  pathology: any;
  procedures: any;
  patientInformation = false;
  patientTable = true;
  addMedicalHistory = false;
  editMedicalHistory = false;

  constructor() {
    this.patientList = [
      {dni: 209876, name: 'Olman', lastName: 'Castro Hernández'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'},
      {dni: 209876, name: 'Olman', lastName: 'Castro'}
    ];
    this.pathology = [
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'}
    ];
    this.procedures = ['dncj', 'dncnd', 'ddmdnm'];
  }

  ngOnInit() {}

  changePage(dni: number) {
    this.patientInformation = true;
    this.patientTable = false;
  }

  changeAddMedicalHistory() {
    this.addMedicalHistory = true;
    this.patientInformation = false;
  }

  changeEditMedicalHistory() {
    this.editMedicalHistory = true;
    this.patientInformation = false;
  }

  cancel() {
    this.addMedicalHistory = false;
    this.editMedicalHistory = false;
    this.patientInformation = true;
  }

}
