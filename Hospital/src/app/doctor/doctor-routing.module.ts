import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';


const routes: Routes = [
    { path : '', component: PatientManagementComponent},

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DoctorRoutingModule { }
