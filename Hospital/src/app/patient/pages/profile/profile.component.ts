import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  patient = {dni: 209876, name: 'Olman', lastName: 'Castro Hernández', age: 56, sex: 'Masculino'};
  pathology: any;
  procedureList: any;

  constructor() {
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
  }

}
