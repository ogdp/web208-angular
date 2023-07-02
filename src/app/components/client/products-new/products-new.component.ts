import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css'],
})
export class ProductsNewComponent {
  products: any;
  constructor(private product: ProductServiceService) {
    this.product.getProductsNew().subscribe((data: any) => {
      this.products = data.product.docs;
    });
  }
}
