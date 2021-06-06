import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ElementDialogConfirmComponent } from '../../element-dialog-confirm/element-dialog-confirm.component';
import { ElementDialogDiscountComponent } from '../../element-dialog-discount/element-dialog-discount.component';


@Component({
  selector: 'app-widget-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() label!: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDeleteProduct() : void{

    const dialogRef = this.dialog.open(ElementDialogConfirmComponent, {
      width: '250px'
    });
  
      }

      openDialogDiscount () : void{
      const dialogRef = this.dialog.open(ElementDialogDiscountComponent, {
        width: '250px'
      });

     }
    }
