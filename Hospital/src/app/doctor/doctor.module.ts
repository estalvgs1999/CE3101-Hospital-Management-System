import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { DoctorRoutingModule } from './doctor-routing.module';

@NgModule({
  declarations: [PatientManagementComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule

  ]
})
export class DoctorModule { }
