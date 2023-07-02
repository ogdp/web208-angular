import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CategoryServiceService } from 'src/app/service/category/category-service.service';
import { ICategory } from 'src/common/Category';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import { IProduct } from 'src/common/Product';
import { IPagination } from 'src/common/Pagination';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  dataCore: any;
  products?: IProduct[];
  listCategory?: ICategory[];
  check_close_category: boolean = false;
  // Pagination
  valueSeted?: number = 1;
  valuePagination: IPagination | any = {};
  pageNumberArr?: number[];
  default_limitDocs: number = 9;
  // apiParams
  apiParams: string = '';
  // checkCategory
  paramsCategory: string = '';
  constructor(
    private productSV: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private categorySV: CategoryServiceService
  ) {
    this.getAllProducts(0);
    this.getAllCategories();
    // Default value
    this.valuePagination.limitPage = 10;
    this.valuePagination.currentPage = 0;
    this.valuePagination.hasPrevPage = false;
    this.valuePagination.hasNextPage = false;
    this.valuePagination.prevPage = null;
    this.valuePagination.nextPage = null;
    this.valuePagination.totalPages = 0;
    this.valuePagination.totalDocs = 0;
    console.log(this.getQueryParams());
  }
  ngOnInit(): void {}
  // Pagination
  setValuePagination(
    limitPage?: number,
    currentPage?: number,
    hasPrevPage?: boolean,
    hasNextPage?: boolean,
    prevPage?: number | null,
    nextPage?: number | null,
    totalPages?: number,
    totalDocs?: number
  ) {
    if (limitPage && limitPage !== 0) {
      this.valuePagination.limitPage = limitPage;
    }
    if (currentPage && currentPage !== 0) {
      this.valuePagination.currentPage = currentPage;
    }
    if (hasPrevPage && hasPrevPage !== this.valuePagination.hasPrevPage) {
      this.valuePagination.hasPrevPage = hasPrevPage;
    }
    if (hasNextPage && hasNextPage !== this.valuePagination.hasNextPage) {
      this.valuePagination.hasNextPage = hasNextPage;
    }
    if (prevPage && prevPage !== null) {
      this.valuePagination.prevPage = prevPage;
    }
    if (nextPage && nextPage !== null) {
      this.valuePagination.nextPage = nextPage;
    }
    if (totalPages && totalPages >= 1) {
      this.valuePagination.totalPages = totalPages;
    }
    if (totalDocs && totalDocs !== 0) {
      this.valuePagination.totalDocs = totalDocs;
    }
    this.pageNumberArr = [];
    for (
      let i = 1;
      this.pageNumberArr.length < this.valuePagination.totalPages;
      i++
    ) {
      this.pageNumberArr.push(i);
    }
    // console.log(this.valuePagination);
  }
  prevAndNext(
    apiParams: string,
    pageNumber: number | null,
    type: string | null,
    prevPage: null | number,
    nextPage: null | number
  ) {
    if (pageNumber == null) {
      if (prevPage == null) {
        this.pageSwitching(
          apiParams,
          type,
          Number(nextPage),
          this.valuePagination.limitPage
        );
      }
      if (nextPage == null) {
        this.pageSwitching(
          apiParams,
          type,
          Number(prevPage),
          this.valuePagination.limitPage
        );
      }
    } else {
      this.pageSwitching(
        apiParams,
        type,
        Number(pageNumber),
        this.valuePagination.limitPage
      );
    }
  }
  pageSwitching(
    apiParams: string,
    type?: string | null,
    pageNumber?: number,
    limit?: number
  ) {
    this.productSV
      .API_pagination(apiParams, type, Number(pageNumber), limit)
      ?.subscribe({
        next: (res: any) => {
          this.updateActionPagination(
            Number(res.product.page),
            Number(res.product.prevPage),
            Number(res.product.nextPage)
          );
          this.dataCore = res.product;
          this.setValuePagination(
            this.dataCore.limit,
            this.dataCore.page,
            this.dataCore.hasPrevPage,
            this.dataCore.hasNextPage,
            this.dataCore.prevPage,
            this.dataCore.nextPage,
            this.dataCore.totalPages,
            this.dataCore.totalDocs
          );
          this.products = res.product.docs;
          // console.log(res.product);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  updateActionPagination(currentPage: number, prev: number, next: number) {
    this.valuePagination.currentPage = currentPage;
    this.valuePagination.prevPage = prev;
    this.valuePagination.nextPage = next;
  }
  // Product
  getAllProducts(page: number) {
    if (page == 0) {
      this.productSV
        .getProductQuantity(this.default_limitDocs, page + 1)
        .subscribe((data: any) => {
          this.dataCore = data.product;
          this.products = data.product.docs;
          this.setValuePagination(
            this.dataCore.limit,
            this.dataCore.page,
            this.dataCore.hasPrevPage,
            this.dataCore.hasNextPage,
            this.dataCore.prevPage,
            this.dataCore.nextPage,
            this.dataCore.totalPages,
            this.dataCore.totalDocs
          );
          this.apiParams = 'products/status';
          // console.log(data.product);
        });
    } else {
      if (page > 0) {
        this.productSV
          .getProductQuantity(this.default_limitDocs, page)
          .subscribe((data: any) => {
            this.products = data.product.docs;
            console.log(data.product);
          });
      }
    }
  }

  // Form search
  formSearch = new FormGroup({
    keyword: new FormControl('', [Validators.required]),
  });
  onHandleSearch() {
    if (this.formSearch.invalid) return;
    const sendData: any = this.formSearch.value;
    this.changeRouteParams('products', String(sendData.keyword));
    const params = `products/search/${sendData.keyword}`;
    this.productSV
      .API_pagination(params, null, 1, this.default_limitDocs)
      .subscribe({
        next: (res: any) => {
          if (res.product.totalDocs == 0) {
            this.products = undefined;
          } else {
            this.products = res.product.docs;
            this.dataCore = res.product;
            this.setValuePagination(
              this.dataCore.limit,
              this.dataCore.page,
              this.dataCore.hasPrevPage,
              this.dataCore.hasNextPage,
              this.dataCore.prevPage,
              this.dataCore.nextPage,
              this.dataCore.totalPages,
              this.dataCore.totalDocs
            );
            this.apiParams = params;
            this.updateActionPagination(
              Number(res.product.page),
              Number(res.product.prevPage),
              Number(res.product.nextPage)
            );
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  // Parameters
  async changeRouteParams(type?: string, keyword?: string) {
    const queryParams = { type: keyword };
    await this.router.navigate(['/products'], { queryParams });
  }
  getQueryParams() {
    let value: any;
    this.route.queryParams.subscribe((params: any) => {
      value = params;
    });
    return value;
  }
  // Format money
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  // JavaScript action tab category
  getAllCategories() {
    this.categorySV.getCategory().subscribe({
      next: (res: any) => {
        this.listCategory = res.category;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  actionQueryCategory(value: string) {
    console.log(value);
  }
  onCloseCategory() {
    this.check_close_category = !this.check_close_category;
    const close_category: any = document.querySelector('#close_category');
    if (this.check_close_category) {
      close_category.style.display = 'none';
    } else {
      close_category.style.display = 'block';
    }
  }
}
