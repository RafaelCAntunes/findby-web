import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog-confirm',
  templateUrl: './element-dialog-confirm.component.html',
  styleUrls: ['./element-dialog-confirm.component.scss']
})
export class ElementDialogConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ElementDialogConfirmComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
