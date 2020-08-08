import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
  },
  { path: '', redirectTo: 'doctor', pathMatch: 'full' },
  {
    path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  { path: '', redirectTo: 'patient', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
