import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '@app-services/firebase.service';
import { Project } from '@app-interfaces/project.interface';
import { DialogComponent } from '@app-dialog/dialog.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  constructor(
    public dialog: MatDialog,
    private firebaseService: FirebaseService
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
      if (result === undefined || '') return
      this.firebaseService.createProject(result);
    });
  }
}
