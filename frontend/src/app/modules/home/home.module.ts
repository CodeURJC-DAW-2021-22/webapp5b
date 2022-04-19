import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductCardsComponent } from './pages/home/product-cards/product-cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductCardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
