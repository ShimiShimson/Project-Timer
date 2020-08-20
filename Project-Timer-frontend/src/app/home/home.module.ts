import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@app-dashboard/dashboard.component';
import { AddProjectComponent } from '@app-add-project/add-project.component';
import { MaterialModule } from '@app-material/material.module';
import { DialogComponent } from '@app-dialog/dialog.component';
import { LoginPageComponent } from '@app-login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from '@app-dashboard-projects/projects.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    DashboardComponent,
    AddProjectComponent,
    DialogComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule, 
    FormsModule],
})
export class HomeModule {}
