import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { PathologyService } from 'src/app/core/services/pathology.service';
import { ProcedureService } from 'src/app/core/services/procedure.service';
import { ClinicalRecordsService } from 'src/app/core/services/clinical-records.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.sass']
})
export class PatientManagementComponent implements OnInit {

  patientList: any;
  patient:any = {dni: 209876, name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  pathology: any;
  procedures: any;
  patientProcedureList: any;
  patientProcedure: any;
  patientInformation = false;
  patientTable = true;
  addMedicalHistory = false;
  editMedicalHistory = false;

  constructor(
    private patientService: PatientService,
    private pathologyService: PathologyService,
    private procedureSevice: ProcedureService,
    private recordService: ClinicalRecordsService
  ) {
    this.patientList = [
      {dni: 209876, name: 'Olman', lastname: 'Castro Hernández'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'},
      {dni: 209876, name: 'Olman', lastname: 'Castro'}
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

  ngOnInit() {
    this.patientService.getAllPatient().subscribe( resPatient => {
      console.log('get all', resPatient);
      this.patientList = resPatient.body;
    });
    this.procedureSevice.getAllProcedure().subscribe( resPros => {
      console.log('procedure', resPros);
      this.procedures = resPros.body;
    });
  }

  changePage(dni: number) {
    this.patientInformation = true;
    this.patientTable = false;
    this.patientService.getOnePatient(dni.toString()).subscribe(resOne => {
        console.log('one Patient', resOne);
        this.patient = resOne.body;
        this.recordService.getRecordByPatientDni(this.patient['dni']).subscribe(res => {
          console.log('records', res);
          this.patientProcedureList = res.body;
        });
    });
    this.pathologyService.getOnePathology(dni.toString()).subscribe(resPath => {
      console.log('patholoias', resPath);
      this.pathology = resPath.body;
    });
  }

  changeAddMedicalHistory() {
    this.addMedicalHistory = true;
    this.patientInformation = false;
  }

  changeEditMedicalHistory(procedure: object) {
    this.editMedicalHistory = true;
    this.patientInformation = false;
    this.patientProcedure = procedure;
  }

  cancel() {
    this.addMedicalHistory = false;
    this.editMedicalHistory = false;
    this.patientInformation = true;
  }

  sendNewRecord(date: string, procedure: string, treatment: string) {
    const data = {
      date,
      procedure_id: procedure,
      patient_dni: this.patient['dni'].toString(),
      treatment
    }
    console.log('createPatient', data);
    this.recordService.createRecord(data).subscribe(res => {
      console.log('create res', res);
      window.location.reload();
    });
  }

  sendEditRecord(treatment: string) {
    const data = {
      treatment
    }
    this.recordService.updateRecord(data, this.patientProcedure['id']).subscribe(resMR => {
      console.log('edit records', resMR);
      window.location.reload();
    });
  }

}
