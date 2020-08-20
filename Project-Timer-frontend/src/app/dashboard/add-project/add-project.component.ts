import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../shared/interfaces/project.interface';
import { ProjectService } from '../../core/services/project.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  public project: Project;

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ) {}

  public openDialog(): void {
    const project: Project = {
      projectName: '',
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.projectService.addProject(result);
    });
  }
}
