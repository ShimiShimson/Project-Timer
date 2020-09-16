import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '@app-interfaces/project.interface';

@Component({
  selector: 'app-project-details-dialog',
  templateUrl: './project-details-dialog.component.html',
  styleUrls: ['./project-details-dialog.component.scss']
})
export class ProjectDetailsDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
