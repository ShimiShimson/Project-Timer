import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@app-dashboard/dashboard.component';
import { ProjectDetailsComponent } from '@app-dashboard/project-details/project-details.component';
import { ProjectsComponent } from '@app-dashboard/projects/projects.component';
import { LoginPageComponent } from '@app-login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'projects', component: ProjectsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
