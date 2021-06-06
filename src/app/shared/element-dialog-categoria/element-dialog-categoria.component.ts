import { Component, OnInit, Inject } from '@angular/core';
import { Categorias } from 'src/app/views/categoria/categoria.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


interface Segmento{
name: string;
value: string;
}


@Component({
  selector: 'app-element-dialog-categoria',
  templateUrl: './element-dialog-categoria.component.html',
  styleUrls: ['./element-dialog-categoria.component.scss']
})
export class ElementDialogCategoriaComponent implements OnInit {
  elemento! : Categorias;
  ischange! : boolean;
  segmentoSelecionado!: string;

  segmentos: Segmento[] =[
    {value: 'Livros',name: 'Livros'},
    {value: 'Papelaria',name: 'Papelaria'},
    {value: 'Eletrodomésticos', name: 'Eletrodomésticos'}

  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Categorias,
    public dialogRef: MatDialogRef<ElementDialogCategoriaComponent>,
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
