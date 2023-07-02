import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
@Component({
  selector: 'app-products-famous',
  templateUrl: './products-famous.component.html',
  styleUrls: ['./products-famous.component.css'],
})
export class ProductsFamousComponent {
  products: any;
  constructor(private product: ProductServiceService) {
    this.product.getProductsPrice().subscribe((data: any) => {
      this.products = data.product.docs;
    });
  }
}
