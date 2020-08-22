import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddProjectComponent } from '../dashboard/add-project/add-project.component';
import { MaterialModule } from '../shared/material/material.module';
import { DialogComponent } from '../dashboard/add-project/dialog/dialog.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from '../dashboard/projects/projects.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    DashboardComponent,
    AddProjectComponent,
    DialogComponent,
    ProjectsComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}
