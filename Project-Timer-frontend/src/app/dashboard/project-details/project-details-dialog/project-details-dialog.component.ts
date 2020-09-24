import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '@app-interfaces/project.interface';

@Component({
  selector: 'app-project-details-dialog',
  templateUrl: './project-details-dialog.component.html',
  styleUrls: ['./project-details-dialog.component.scss']
})
export class ProjectDetailsDialog {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
