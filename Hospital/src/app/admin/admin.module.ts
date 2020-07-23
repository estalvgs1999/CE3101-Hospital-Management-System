import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportComponent } from './pages/report/report.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SalonManagementComponent } from './pages/salon-management/salon-management.component';
import { BedManagementComponent } from './pages/bed-management/bed-management.component';
import { MedicalProcedureManagementComponent } from './pages/medical-procedure-management/medical-procedure-management.component';
import { PersonalManagementComponent } from './pages/personal-management/personal-management.component';
import { MedicalEquipmentManagementComponent } from './pages/medical-equipment-management/medical-equipment-management.component';

@NgModule({
  declarations: [
    ReportComponent,
    SalonManagementComponent,
    BedManagementComponent,
    MedicalProcedureManagementComponent,
    PersonalManagementComponent,
    MedicalEquipmentManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
