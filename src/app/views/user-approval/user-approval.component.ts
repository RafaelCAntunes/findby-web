import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.scss']
})
export class UserApprovalComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['id', 'login', 'name', 'cpfCgc','actions'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private userService: UserService, private router: Router) { }


  ngAfterViewInit() {
    this.dataSource.sort;
    this.dataSource.paginator = this.paginator;
  }



 async ngOnInit(): Promise<void> {
    
  const result = await this.userService.getUnauthorizedUsers();
  this.dataSource.data=result;
  console.log();
  
  
  }
 


}
