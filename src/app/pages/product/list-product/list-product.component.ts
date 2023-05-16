import { Component } from '@angular/core';
import { products } from 'src/app/data/mockData';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  // products = [];
  products = products;
}
