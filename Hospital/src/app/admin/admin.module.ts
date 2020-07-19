import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './pages/report/report.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
