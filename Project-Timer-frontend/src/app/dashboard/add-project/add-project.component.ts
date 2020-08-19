import {Component, OnInit} from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { DashboardService } from '../../core/services/dashboard.service';
import { ProjectService } from '../../core/services/project.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  project: Project;

  constructor(public dialog: MatDialog, private dashboardService: DashboardService, private projectService: ProjectService) {}
  ngOnInit(): void {
  }

  openDialog(): void {
    const project: Project = {
      projectName: ""
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: project
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectService.addProject(result);
    });
  }
}
