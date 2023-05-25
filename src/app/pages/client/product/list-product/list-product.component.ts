import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { products } from 'src/app/data/mockData';
import { IProduct } from 'src/common/Product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent  {
  products: IProduct[] = products;
  // searchTerm!: string;
  // filteredProducts: IProduct[] = [];
  constructor(){}
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


