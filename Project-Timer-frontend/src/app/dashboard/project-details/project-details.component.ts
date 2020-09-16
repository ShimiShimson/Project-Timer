import { Component, Input } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { FirebaseService } from '@app-services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsDialog } from './project-details-dialog/project-details-dialog.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  @Input() project: Project;

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) { }

  deleteProject() {
    const result = window.confirm('Are you sure?');
    if (!result) return
    this.firebaseService
      .deleteProject(this.project.key)
      .catch((err) => console.log(err));
  }

  openDialog(project: Project): void {
    const dialogRef =
      this.dialog.open(ProjectDetailsDialog, {
        width: '250px',
        data: project
      });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === undefined || '') return
        // if (result == project) return console.log('this is the same!')
        this.firebaseService.updateProject(project.key, result).then(value => console.log(value))
      })
  }
}
