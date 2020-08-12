import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  constructor(public matDialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogContent, dialogConfig);
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent {

  constructor( public dialogRef: MatDialogRef<DialogContent>){}
  
  close() {
    this.dialogRef.close();
  }
}