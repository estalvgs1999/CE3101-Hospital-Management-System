import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReservationManagementComponent } from './pages/reservation-management/reservation-management.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { PatientRoutingModule } from './patient.routing.module';

@NgModule({
  declarations: [ProfileComponent, ReservationManagementComponent, EvaluationComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
