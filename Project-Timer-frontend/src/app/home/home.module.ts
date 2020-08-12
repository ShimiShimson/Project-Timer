import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddProjectComponent } from '../dashboard/add-project/add-project.component';
import { MaterialModule } from '../shared/material/material.module';
import { DialogComponent, DialogContent } from '../dashboard/add-project/dialog/dialog.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    LoginPageComponent,
    DashboardComponent, 
    AddProjectComponent, 
    DialogComponent,
    DialogContent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule { }
