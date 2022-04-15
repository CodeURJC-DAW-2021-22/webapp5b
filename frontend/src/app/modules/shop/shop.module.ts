import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CardsComponent } from './pages/products/cards/cards.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
