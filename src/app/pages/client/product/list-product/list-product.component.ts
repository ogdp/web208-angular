import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/common/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/client/products/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent  {
  // products: IProduct[] = products;
  products:any
  // searchTerm!: string;
  // filteredProducts: IProduct[] = [];
  constructor(private product:ProductService){
    this.product.getProducts().subscribe((data:any)=>{
      console.log(data);
      this.products=data.product.docs
      console.log(this.products)
    })
  }
  // ngOnInit(): void{

  // }
  // enteredSearchValue: string = ''
  // @Output()
  // searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  // onSearchTextChange(){
  //   this.searchTextChange.emit(this.enteredSearchValue)
  // }
  searchText: string=''
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue
    // console.log(this.searchText)
  }

  
}


