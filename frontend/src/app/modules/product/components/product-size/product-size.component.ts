import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '@app/core/api';
import { ShopUser, Transaction } from '@app/shared/classes';
import { Wishlist } from '@app/shared/classes/wishlist';
import { TransactionSpecialType } from '@app/shared/data-type';
import { Product, ProductInTransaction } from '@app/shared/model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.css']
})
export class ProductSizeComponent implements OnInit {

  isAmount : boolean = false;
  isAdded: boolean = false;
  isSelect: boolean = false;
  isAddedWish: boolean = false;
  isRemovedWish: boolean = false;
  isLessFive: boolean = false;
  isLessTen: boolean = false;


  @Input()
  productSizes!: Product[];

  @Input()
  user!: ShopUser | null;

  @Input()
  wishlist!: Wishlist | null;

  isPresent?: boolean;
  selectedProduct?: number; 

  faHeart = faHeart; 
  productInTransaction!: ProductInTransaction;
  isInWishlist: any;

  amount: number = 1;

  wishlistButton: any;

  cartType: TransactionSpecialType = TransactionSpecialType.CART;
  wishlistType: TransactionSpecialType = TransactionSpecialType.WISHLIST;

  constructor(
    private transactionService: TransactionService
  ) { 

    
  }

  ngOnInit(): void {

    this.productInTransaction = this.initProductInTransaction();
    this.checkIfPresentInWishlist();


  }

  initProductInTransaction(): ProductInTransaction {

    return {
      id: this.productSizes?.[0].id,
      name: this.productSizes?.[0].name,
      size: this.productSizes?.[0].size,
      price: this.productSizes?.[0].price,
      quantity: 1

    }
  }

  selectSize(index: number) {

    if (this.selectedProduct === undefined || this.selectedProduct != index) {
      this.selectedProduct = index;
      if (this.productSizes[this.selectedProduct]?.stock < 5) {

        console.log(this.productSizes[this.selectedProduct]?.stock)
      }
      else if(this.productSizes[this.selectedProduct]?.stock < 20){
        this.lessThanTen();
      }

    } else {
      this.selectedProduct = undefined;
    }
      
  }

  checkIfPresentInWishlist() {

    this.isPresent = this.wishlist?.productIsPresent(this.productInTransaction) != -1
  }

  addToCart() {

    if (this.selectedProduct !== undefined) {

      if (this.amount > this.productSizes[this.selectedProduct]?.stock) { 
        // alert not enough amount
        this.errorAmount();
      

      } else {
        let index: number = this.selectedProduct;

        this.transactionService.addProductByAmountToMyTransaction
        (this.productSizes[this.selectedProduct].id, this.cartType, this.amount).subscribe(
          response => {
            // alert added to cart
            this.addedToCart();
            this.productSizes[index].stock -= this.amount;
          },
          error => console.log(error)
        );

      }
    } 
    else{
    // alert select size
    this.select();
    }
  }
  


  errorAmount() {

    this.isAmount = true;
  }

  addedToCart(){
    this.isAdded = true;
  }

  select(){
    this.isSelect = true;
  }

  toogleWishlist() {

    if (this.wishlist !== null) {

      if (!this.isPresent) {
        this.addToWishlist();

      } else {
        this.removeFromWishlist();

      }
    }
  }

  private addToWishlist() {

    this.isPresent = true;
    this.transactionService.addProductByAmountToMyTransaction
      (this.productSizes?.[0].id, this.wishlistType, 1).subscribe(
        response => this.addedWish()
      )
  }

  private removeFromWishlist() {

    this.isPresent = false;
    this.transactionService.deleteProductFromMyTransaction
      (this.productSizes?.[0].id, this.wishlistType).subscribe(
        response => this.removedWish()
      )
  }

  isLogged(): boolean {
    return this.user != null;
  }

  addedWish(){
    this.isAddedWish = true;
  }

  removedWish(){
    this.isRemovedWish = true;
  } 

  lessThanFive(){
    this.isLessFive = true;
  }

  lessThanTen(){
    this.isLessTen = true;
  }

}
