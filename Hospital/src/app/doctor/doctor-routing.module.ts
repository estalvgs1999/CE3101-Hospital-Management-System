import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';


const routes: Routes = [
    { path : '', component: PatientManagementComponent},
    { path : 'register', component: PatientRegisterComponent},

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DoctorRoutingModule { }
