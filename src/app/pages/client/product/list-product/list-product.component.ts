import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/common/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/client/products/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  searchText: any;
  noSearch = true;
  searchResult: undefined | any;
  products: any;
  p: number = 1;
  itemsPerPage: number = 6;
  constructor(
    private product: ProductService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.product.getProducts().subscribe((data: any) => {
      this.products = data.product.docs;
    });
  }
  searchForm = this.formBuilder.group({
    searchText: ['', [Validators.required]],
  });

  search() {
    console.log(this.searchText);
    this.noSearch = false;
    window.location.href = `/product/search/${this.searchText}`;
    // this.router.navigate([`product/search/${this.searchText}`]);
  }

  ngOnInit(): void {
    let key = this.activeRoute.snapshot.paramMap.get('key');
    // console.warn(key)
    if (key && key != '') {
      this.noSearch = false;
    } else {
      this.noSearch = true;
    }
    key &&
      this.product.searchProduct(key).subscribe((result: any) => {
        this.searchResult = result.productFind;
        // console.log(result)
      });
  }
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
