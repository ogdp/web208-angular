import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/client/products/product.service';

@Component({
  selector: 'app-products-famous',
  templateUrl: './products-famous.component.html',
  styleUrls: ['./products-famous.component.css']
})
export class ProductsFamousComponent {
  products:any
  constructor(private product:ProductService){
    this.product.getProductsPrice().subscribe((data:any)=>{
      this.products=data.product.docs
    })
  }
}
