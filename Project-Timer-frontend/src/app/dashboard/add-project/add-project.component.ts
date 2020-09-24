import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '@app-services/firebase.service';
import { Project } from '@app-interfaces/project.interface';
import { DialogComponent } from '@app-dialog/dialog.component';
import { ProjectService } from '@app-services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  @Output() projectCreated = new EventEmitter<boolean>()

  constructor(
    public dialog: MatDialog,
    private firebaseService: FirebaseService,
    private projectService: ProjectService,
  ) { }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {},
    });

    const dialogClosedObserver = (project: Project) => {
      if (project === undefined || '') return;
      this.firebaseService.createProject(project)
        .subscribe(response => {
          console.log(response);
          if (response['name']) {
          this.firebaseService.getProjectsFromDatabase()
            .subscribe(projects => this.projectService.setProjects(projects));
          }
        })
    }

    dialogRef.afterClosed().subscribe(dialogClosedObserver);
  }
  
}
