import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { PageableShopUser } from '@app/shared/model';
import { catchError, Observable, of } from 'rxjs';
import { ShopUserService } from '../api';

@Injectable({
  providedIn: 'root'
})
export class PageableUsersResolver implements Resolve<PageableShopUser> {

  constructor(
    private userService: ShopUserService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageableShopUser> {

    const page: number = 1;

    return this.userService.getUsers(page).pipe(catchError(
      err => {
        console.log(err)

        const pageableShopUser: PageableShopUser = {
          users: [],
          totalPages: 1
        }
        return of(pageableShopUser);
      }
    ));
  }
}
