import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { PageableProduct } from '@app/shared/model';
import { catchError, Observable, of } from 'rxjs';
import { ProductService } from '../api';

@Injectable({
  providedIn: 'root'
})
export class PageableProductsResolver implements Resolve<PageableProduct> {

  constructor(
    private productService: ProductService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageableProduct> {

    const page: number = 1;

    return this.productService.getProducts(page).pipe(catchError(
      err => {
        console.log(err)

        const pageableProduct: PageableProduct = {
          products: [],
          totalPages: 1
        }
        return of(pageableProduct);
      }
    ))
  }
}
