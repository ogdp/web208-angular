import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/client/products/product.service';
@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent {
  products:any
  constructor(private product:ProductService){
    this.product.getProductsNew().subscribe((data:any)=>{
      this.products=data.product.docs
    })
  }
}
