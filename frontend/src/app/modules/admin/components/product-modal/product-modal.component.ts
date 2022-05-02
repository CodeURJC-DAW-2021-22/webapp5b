import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductSize } from '@app/shared/data-type';
import { Product } from '@app/shared/model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileCheck } from 'angular-file-validator';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit, AfterViewInit {

  sizeOptions: string[] = Object.keys(ProductSize);


  @Input()
  product?: Product;

  manipulateProduct: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),

    description: new FormControl(null, [
      Validators.required
    ]),

    price: new FormControl(null, [
      Validators.required
    ]),

    stock: new FormControl(null, [
      Validators.required
    ]),

    size: new FormControl(null, [
      Validators.required
    ]),

    images: new FormArray([new FormControl(null)])
  });

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     
    this.manipulateProduct.patchValue({
      
      name: this.product?.name,
      description: this.product?.description,
      price: this.product?.price,
      stock: this.product?.stock,
      size: this.product?.size
    })
  }

  addImageForm() {

    this.getImages().push(new FormControl(null))
  }

  removeImageForm() {

    let length: number = this.getImages().length - 1;
    if (length >= 0)
      this.getImages().removeAt(length);
  }

  closeModalManipulateProduct() {

    this.activeModal.dismiss('Modal Closed');
  }

  submitForm() {

    this.activeModal.close(this.manipulateProduct.value);
  }

  getImages(): FormArray {

    return this.manipulateProduct.controls["images"] as FormArray;
  }  

}
