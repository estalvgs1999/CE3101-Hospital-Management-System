import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './pages/profile/profile.component';
import { ReservationManagementComponent } from './pages/reservation-management/reservation-management.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { PatientRoutingModule } from './patient.routing.module';

@NgModule({
  declarations: [ProfileComponent, ReservationManagementComponent, EvaluationComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ]
})
export class PatientModule { }
