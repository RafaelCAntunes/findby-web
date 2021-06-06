import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog-discount',
  templateUrl: './element-dialog-discount.component.html',
  styleUrls: ['./element-dialog-discount.component.scss']
})
export class ElementDialogDiscountComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ElementDialogDiscountComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
