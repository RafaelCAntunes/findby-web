import { Component, OnInit, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog-segmento',
  templateUrl: './element-dialog-segmento.component.html',
  styleUrls: ['./element-dialog-segmento.component.scss']
})
export class ElementDialogSegmentoComponent implements OnInit {
  elemento! : any;
  ischange! : boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public dialogRef: MatDialogRef<ElementDialogSegmentoComponent>,
    ) {}

  

  ngOnInit(): void {

    if(this.data.id !== null){
      this.ischange = true;
    }else{
      this.ischange = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
