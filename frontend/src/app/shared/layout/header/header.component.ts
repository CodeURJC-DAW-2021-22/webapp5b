import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/authentication';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  isCollapsed: boolean = true;

  logged : boolean = false;
  isAdmin : boolean = false;
  username : string = "";
  nCartItems : number = 0;
  
  
  ngOnInit(): void {
  }

  
  logOut(): void {
  }
}


