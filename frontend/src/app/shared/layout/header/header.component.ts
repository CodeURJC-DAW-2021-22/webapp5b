import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { AuthService } from '@app/core/authentication';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(
    private router: Router,
    private authService: AuthService
  ) { 
    
  }
  
  isCollapsed: boolean = true;

  logged : boolean = false;
  isAdmin : boolean = false;
  username : string = "";
  nCartItems : number = 0;
  
  
  ngOnInit(): void {

    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {

        let userData = this.authService.getUserData();
        this.logged = userData !== null && userData !== undefined
        if (userData !== null && userData !== undefined) {
          this.username = userData.username
          this.isAdmin = userData.role == "ADMIN"
        }
      }
    });
  }

  
  logOut(): void {
  }
}


