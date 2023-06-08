import { Component, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category/category-service.service';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import { ICategory } from 'src/common/Category';

@Component({
  selector: 'app-admin-list-category',
  templateUrl: './admin-list-category.component.html',
  styleUrls: ['./admin-list-category.component.css'],
})
export class AdminListCategoryComponent {
  notificationPro: number = 0;
  dataCategory: ICategory[] = [] || undefined;
  constructor(
    private categorySV: CategoryServiceService,
    private productSV: ProductServiceService,
    private params: ActivatedRoute
  ) {
    this.getAllCategory();
  }
  ngOnchanges(changes: SimpleChange) {}
  getAllCategory() {
    this.categorySV.getCategory().subscribe(
      (response: any) => {
        this.dataCategory = response.category;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  removeCategory(id: string) {
    if (!confirm('Bạn có chắc chắn xoá không ?')) return;
    const token = JSON.parse(String(localStorage.getItem('user'))).accessToken;
    const bodyMoveCateId = {
      categoryIdOld: id,
      categoryIdNew: '6477f7e15142b55388df1394',
    };
    this.productSV.updateFollowCategoryId(bodyMoveCateId, token).subscribe(
      (response: any) => {
        this.categorySV.removeCategory(id, token).subscribe(
          (response: any) => {
            this.getAllCategory();
            this.notificationPro = 2;
            setTimeout(() => {
              this.notificationPro = 0;
            }, 1200);
          },
          (err: any) => {
            console.log(err);
          }
        );
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  Cha(value: object) {
    const token = JSON.parse(String(localStorage.getItem('user'))).accessToken;
    this.categorySV.addCategory(value, token).subscribe(
      (response: any) => {
        // console.log(response);
        this.getAllCategory();
        this.notificationPro = 1;
        setTimeout(() => {
          this.notificationPro = 0;
        }, 1200);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
