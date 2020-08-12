import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [DashboardComponent, AddProjectComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
  ]
})
export class DashboardModule { }
