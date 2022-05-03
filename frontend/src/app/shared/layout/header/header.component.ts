import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { AuthService } from '@app/core/authentication';
import { ShopUser } from '@app/shared/model';
import { catchError, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription!: Subscription;

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

    this.subscription = this.authService.$userObservable.subscribe(
      response => {
        let userData = this.authService.getUserData();
        this.logged = userData !== null && userData !== undefined
        if (userData !== null && userData !== undefined) {
          this.username = userData.username
          this.isAdmin = userData.role == "ADMIN"
        }
      },catchError(
        err => {
          this.logged = false;
          this.isAdmin = false;
          this.username = "";
          this.nCartItems = 0;
          return of(null)
        }
      )
    )
  }



  logOut(): void {
    this.authService.logout().subscribe(
      response => {

        this.logged = false;
        this.isAdmin = false;
        this.username = "";
        this.nCartItems = 0;
        this.router.navigate(['/home']);

      }
    )
  }
}


