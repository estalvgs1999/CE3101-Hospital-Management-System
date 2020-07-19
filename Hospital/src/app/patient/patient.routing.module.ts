import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReservationManagementComponent } from './pages/reservation-management/reservation-management.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';

const routes: Routes = [
    { path : '', component: ProfileComponent},
    { path : 'reservation', component: ReservationManagementComponent},
    { path : 'evaluation', component: EvaluationComponent}

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PatientRoutingModule { }
