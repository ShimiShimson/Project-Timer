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
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from '@app-dashboard/project-details/project-details.component';
import { ProjectDetailsDialog } from '@app-dashboard/project-details/project-details-dialog/project-details-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginPageComponent,
    DashboardComponent,
    AddProjectComponent,
    DialogComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectDetailsDialog,
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule, 
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
