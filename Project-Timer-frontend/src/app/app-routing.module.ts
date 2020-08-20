import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from '@app-dialog/dialog.component';
import { DashboardComponent } from '@app-dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dialog', component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
