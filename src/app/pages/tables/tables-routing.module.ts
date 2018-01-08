import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { RecordTableComponent } from './record-table/record-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'patient-table',
    component: PatientTableComponent,
  },
  
  {
    path: 'record-table/:patientId',
    component: RecordTableComponent,
    //canActivate: [() => false],
  },
  
   {
    path: '',
    redirectTo: 'patient-table',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  PatientTableComponent,
  RecordTableComponent,
];
