import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-dialog-new-product',
  templateUrl: './element-dialog-new-product.component.html',
  styleUrls: ['./element-dialog-new-product.component.scss']
})
export class ElementDialogNewProductComponent implements OnInit {

  product = {
    name: '',
    category: '',
    segment:'',
    image:'',
    brand:'',
    price:'',
    description:''
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
