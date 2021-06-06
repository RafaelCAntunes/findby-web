import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { ElementDialogSegmentoComponent } from 'src/app/shared/element-dialog-segmento/element-dialog-segmento.component';




const ELEMENT_DATA  = [
  {id: 1, name: 'Eletrodomésticos', description: 'eletrônicos para a casa', inclusionDate: '12/01/2021',pudim:'pudim'},
  {id: 2, name: 'Vestuário', description: 'roupas e calçados', inclusionDate: '12/01/2021',pudim:'pudim'},
  {id: 3, name: 'Decoração', description: 'materiais utilizados para decoração', inclusionDate: '12/01/2021'},
  {id: 4, name: 'Eletroportáteis', description: 'aparelhos eletrônicos portáteis', inclusionDate: '12/01/2021'},
  {id: 5, name: 'Informática', description: 'artigos relacionados a informática como computadores e impressoras', inclusionDate: '14/01/2021'},
  {id: 6, name: 'Jóias e Bijuterias', description: 'adornos de uso pessoal', inclusionDate: '14/01/2021'},
  {id: 7, name: 'Automotivo', description: 'artigos para veículos', inclusionDate: '14/01/2021'},
  {id: 8, name: 'Bebês', description: 'artigos para recém-nascidos', inclusionDate: '14/01/2021'},
  {id: 9, name: 'Esporte e Lazer', description: 'artigos de esporte e lazer outdoor', inclusionDate: '14/01/2021'},
  {id: 10, name: 'Ferramentas', description: 'equipamentos e ferramentas para construção e reparo', inclusionDate: '22/01/2021'},
  {id: 11, name: 'Papelaria', description: 'artigos de papelaria como sulfite e canetas', inclusionDate: '22/01/2021'},
  {id: 12, name: 'Livros', description: 'livros de todos os tipos', inclusionDate: '22/01/2021'},
  {id: 13, name: 'Beleza e Saúde', description: 'produtos de beleza e saúde', inclusionDate: '22/01/2021'},
  {id: 14, name: 'Tvs e Vídeo', description: 'equipamentos de TV e seus acessórios', inclusionDate: '22/01/2021'},
  {id: 15, name: 'Perfumaria', description: 'produtos de perfumaria', inclusionDate: '11/02/2021'},
  {id: 16, name: 'Instrumentos Musicais', description: 'Instrumentos musicais no geral', inclusionDate: '11/02/2021'},
  {id: 17, name: 'Games', description: 'Video games e acessórios para games', inclusionDate: '11/02/2021'},
  {id: 18, name: 'Casa e Construção', description: 'artigos de utilidade para casa', inclusionDate: '11/02/2021'},
  {id: 19, name: 'Artesanato', description: 'artigos utilizados para a confecção de artesanato', inclusionDate: '11/02/2021'},
  {id: 20, name: 'Artigos para Festa', description: 'produtos para festas no geral', inclusionDate: '11/02/2021'},
];


@Component({
  selector: 'app-segmento',
  templateUrl: './segmento.component.html',
  styleUrls: ['./segmento.component.scss']
})
export class SegmentoComponent implements AfterViewInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'name','actions'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
 
  
  ngAfterViewInit() {
    this.dataSource.sort;
    this.dataSource.paginator = this.paginator;
  }


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

    
  }

  openDialog(element: any | null) : void{

    const dialogRef = this.dialog.open(ElementDialogSegmentoComponent, {
      width: '250px',
      data: element === null ? {
        id: null,
        name: '',
        description: '',
        inclusionDate: new Date().toLocaleDateString()} : 
        {
          id: element.id,
          name: element.name,
          description: element.description,
          inclusionDate: element.inclusionDate}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result !== undefined){
        result.id === null? result.id = ELEMENT_DATA.length + 1:result.id;
        if(this.dataSource.data.map(p => p.id).includes(result.id)){
          this.dataSource.data[result.id-1] = result;
          this.dataSource.paginator = this.paginator; 
        }else{
          this.dataSource.data.push(result);
          console.log(this.dataSource.data);
          this.dataSource.paginator = this.paginator;        
        }
      }
    });
  
  }

  editElement(element : any): void{
    this.openDialog(element);
  }

  deleteElement(id : number): void{
    this.dataSource.data = this.dataSource.data.filter(p => p.id !== id);
  }

}
