import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/common/Product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent implements OnInit {
  @Input() products?: IProduct[] | any;
  @Input() sumCard?: number | any;
  constructor() {}
  ngOnInit(): void {}
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
