import { Component, Input } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { FirebaseService } from '@app-services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsDialog } from './project-details-dialog/project-details-dialog.component';
import { ProjectService } from '@app-services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  @Input() project: Project;

  constructor(
    private firebaseService: FirebaseService, 
    private projectService: ProjectService,
    public dialog: MatDialog
  ) { }

  public deleteProject(): void {
    const result = window.confirm('Are you sure?');
    if (!result) return

    this.firebaseService.deleteProject(this.project.key)
      .subscribe(response => {
        console.log(response);
        this.firebaseService.getProjectsFromDatabase()
          .subscribe(projects => this.projectService.setProjects(projects));
      })
  }

  public openDialog(project: Project): void {
    const dialogRef =
      this.dialog.open(ProjectDetailsDialog, {
        width: '250px',
        data: project
      });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === undefined || '') return
        this.firebaseService.updateProject(project.key, result)
          .subscribe(response => console.log(response))
      })
  }
}
