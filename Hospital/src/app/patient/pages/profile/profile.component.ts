import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { PathologyService } from 'src/app/core/services/pathology.service';
import { ClinicalRecordsService } from 'src/app/core/services/clinical-records.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  patient: object = {dni: 209876, name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  dni: string = '4-3756-2912';
  pathology: any;
  procedureList: any;
  patientInformation: boolean = true;

  constructor(
    private patientService: PatientService,
    private pathologyService: PathologyService,
    private recordService: ClinicalRecordsService) {
    this.pathology = [
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'},
      {name: 'Diabetes', medication: '3ml al día'}
    ];
    this.procedureList = [
      {date: '23-04-2020', name: 'Cirugía', treatment: 'cjdbjhchjschdjcjdbcjhdjcjhd'},
      {date: '23-04-2020', name: 'Cirugía', treatment: 'cjdbjhchjschdjcjdbcjhdjcjhd'},
      {date: '23-04-2020', name: 'Cirugía', treatment: 'cjdbjhchjschdjcjdbcjhdjcjhd'},
      {date: '23-04-2020', name: 'Cirugía', treatment: 'cjdbjhchjschdjcjdbcjhdjcjhd'},
      {date: '23-04-2020', name: 'Cirugía', treatment: 'cjdbjhchjschdjcjdbcjhdjcjhd'},
      {date: '23-04-2020', name: 'Cirugía', treatment: 'cjdbjhchjschdjcjdbcjhdjcjhd'}
    ];
  }


  ngOnInit() {
    this.patientService.getOnePatient(this.dni).subscribe(Response => {
      console.log('patient data', Response);
      this.patient = Response.body;
    });
    this.pathologyService.getOnePathology(this.dni).subscribe( Response => {
      console.log('pathology data', Response);
      this.pathology = Response.body;
    });
    this.recordService.getRecordByPatientDni(this.dni).subscribe(
      Response => {
        console.log('records data', Response);
        this.procedureList = Response.body;
      }
    )
  }
  changeAddMedicalHistory() {
    console.log('change');
  }

}
