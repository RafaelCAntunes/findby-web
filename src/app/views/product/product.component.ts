import { Component, OnInit } from '@angular/core';
import { ElementDialogSegmentoComponent } from 'src/app/shared/element-dialog-segmento/element-dialog-segmento.component';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { ElementDialogNewProductComponent } from 'src/app/shared/element-dialog-new-product/element-dialog-new-product.component';
import { ElementDialogConfirmComponent } from 'src/app/shared/element-dialog-confirm/element-dialog-confirm.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

   openDialogNewProduct() : void{

    const dialogRef = this.dialog.open(ElementDialogNewProductComponent, {
      width: '740px'
    });


}


}
