import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  router: any;
  SideBarOpen = true;
  constructor() {}

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.SideBarOpen = !this.SideBarOpen;
  }

 

}

