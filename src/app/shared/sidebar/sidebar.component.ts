import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 isVendor: boolean = true;
 isAdmin: boolean = false;
 hasProfile: boolean = false; 
 
  constructor() { }

  ngOnInit(): void {
    const userType = window.localStorage.getItem("userType");

    if(userType === 'A'){
      this.isAdmin = true;
      this.isVendor = false;
    }else{
      this.isAdmin = false;
      this.isVendor = true;
    }
  }

 color : string  = "LightGray";


}
