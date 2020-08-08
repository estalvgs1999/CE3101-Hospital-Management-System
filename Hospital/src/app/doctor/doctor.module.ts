import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';

@NgModule({
  declarations: [PatientManagementComponent, PatientRegisterComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule

  ]
})
export class DoctorModule { }
