import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportComponent } from './pages/report/report.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path : '', component: ReportComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }