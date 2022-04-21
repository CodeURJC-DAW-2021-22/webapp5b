import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {
  
  @Input()
  products : any;
 
  constructor() { }

  ngOnInit(): void {
  }

  turnWishlist(){

  }

}
