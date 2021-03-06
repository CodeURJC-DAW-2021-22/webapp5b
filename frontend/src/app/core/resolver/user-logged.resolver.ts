import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ShopUser as ShopUserInterface} from '@app/shared/model';
import { ShopUser } from '@app/shared/classes';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../authentication';

  

@Injectable({
  providedIn: 'root'
})
export class UserLoggedResolver implements Resolve<ShopUser | null> {

  constructor(
    private authService: AuthService
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShopUser | null> {

    return this.authService.loadUser().pipe(map(
      response => new ShopUser(response),
      (error: any) => {
        console.log(error)
        return null
      }), catchError(
        err => {
          console.log(err)
          return of(null)          
        }));
  }
}
