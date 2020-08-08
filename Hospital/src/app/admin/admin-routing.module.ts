import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReportComponent } from './pages/report/report.component';
import { BedManagementComponent } from './pages/bed-management/bed-management.component';
import { MedicalProcedureManagementComponent } from './pages/medical-procedure-management/medical-procedure-management.component';
import { MedicalEquipmentManagementComponent } from './pages/medical-equipment-management/medical-equipment-management.component';
import { PersonalManagementComponent } from './pages/personal-management/personal-management.component';
import { SalonManagementComponent } from './pages/salon-management/salon-management.component';

const routes: Routes = [
    {path: '', component: PersonalManagementComponent},
    { path : 'report', component: ReportComponent},
    { path : 'bed', component : BedManagementComponent },
    { path : 'procedure', component: MedicalProcedureManagementComponent},
    { path : 'equipment', component: MedicalEquipmentManagementComponent},
    { path : 'personal', component: PersonalManagementComponent},
    { path : 'salon', component: SalonManagementComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
