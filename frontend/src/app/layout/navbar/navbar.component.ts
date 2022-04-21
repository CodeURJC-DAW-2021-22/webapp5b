import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = "";
  logged = true;
  nCartItems = 0;
  username = "";

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    alert("Logout");
  }

}
