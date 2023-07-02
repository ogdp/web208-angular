
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  constructor(){ }
  ngOnInit(): void{

  }
  enteredSearchValue: string = ''
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
}
