import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductImagesService, ProductService } from '@app/core/api';
import { NewProduct, PageableProduct, Product, ProductNoImages } from '@app/shared/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: Product[] = [];
  totalPages!: number;
  nextPage: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private modalService: NgbModal,
    private productImagesService: ProductImagesService
    ) { }

  ngOnInit(): void {

    this.refresh(this.route.snapshot.data['products'])
  }

  refresh(page: PageableProduct) {

    let length = this.products.length;

    this.products.splice(length, 0, ...page.products);
    this.totalPages = page.totalPages;
    this.nextPage++;
  }

  loadNextPage(): void {
    
    if (this.totalPages >= this.nextPage) {
      this.productService.getProducts(this.nextPage).subscribe(
        pageableProducts => this.refresh(pageableProducts)
      )
    }
  }

  private updateProductInTable(index:number, updatedProduct: Product) {

    this.products[index] = updatedProduct;
  }

  private uploadImages(id: number, images: string[]) {
    
    
    if (images.length > 0) {
      const formData = new FormData()

    /*
      for (let [i, image] of images.entries()) {

        
        formData.append("imagesFile", image)
      }
    */
   
      for (let i = 0; i < images?.length || 0; i++)
      formData.append('imagesFile', images[i]);
  
      console.log(formData)

      this.productImagesService.postImage(id, formData).subscribe(
        response => console.log(response)
      );

    }
  }

  editProduct(index: number) {

    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = this.products[index];

    modalRef.result.then(
      (result) => {
        const product: ProductNoImages = {
          id: this.products[index].id,
          name: result.name,
          description: result.description,   
          price: result.price,
          stock: result.stock,
          size: result.size
        }

        console.log(result)

        this.productService.putProductWithoutImages(product).subscribe(
          response => {
            this.updateProductInTable(index, response);
            this.uploadImages(product.id, result.images)
          },
          error => console.log(error)
        )
      }
    ).catch(
      error => console.log(error)
    )
  }
  

  deleteProduct(index: number) {
 
    this.productService.deleteProduct(this.products[index].id).subscribe(
      error => console.log(error)
    );
    this.products.splice(index, 1);
  }

  private addProductInTable(product: Product) {

    this.products.push(product)
  }

  addProduct() {

    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.result.then(
      (result) => {
        const product: NewProduct = {
          name: result.name,
          description: result.description,   
          price: result.price,
          stock: result.stock,
          size: result.size
        }

        this.productService.postProductWithoutImages(product).subscribe(
          response => this.addProductInTable(response),
          error => console.log(error)
        )
      }
    ).catch(
      error => console.log(error)
    )
  }

}
