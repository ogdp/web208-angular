import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/mockData';
import { IProduct } from 'src/common/Product';
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css'],
})
export class DetailsProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: any = '';
  products = products;
  product: any = {};
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.product = this.products.filter((item: any) => item.id == this.id)[0];
    });
  }
  formatMoney(amount: any) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  isEmptyObject(obj: any) {
    return Object.keys(obj).length === 0;
  }
}
