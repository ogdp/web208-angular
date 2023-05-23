import { Component } from '@angular/core';
import { products } from 'src/app/data/mockData';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IProduct } from 'src/common/Product';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})

export class ListProductComponent {
  products:IProduct[] = products;
  searchTerm!: string
  filteredProducts: IProduct[] = [];


  filterProducts() {
    return this.products.filter(product => {
      return product.name.includes(this.searchTerm);
    });
  }
}
