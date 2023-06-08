import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/common/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/client/products/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  products: any;
  constructor(private product: ProductService) {
    this.product.getProducts().subscribe((data: any) => {
      this.products = data.product.docs;
    });
  }

  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
