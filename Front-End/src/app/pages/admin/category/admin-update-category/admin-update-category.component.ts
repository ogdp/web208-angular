import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/category/category-service.service';
import { CateCheckName } from '../../../../lib/category';
import { ICategory } from 'src/common/Category';
@Component({
  selector: 'app-admin-update-category',
  templateUrl: './admin-update-category.component.html',
  styleUrls: ['./admin-update-category.component.css'],
})
export class AdminUpdateCategoryComponent {
  valueFromUrl: string = '';
  dataOld: any = {};
  notificationPro: number = 0;
  id: string = '';
  dataCategory?: ICategory[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorySV: CategoryServiceService
  ) {
    const url: any = this.route.url;
    this.id = url._value[0];
    this.getData();
  }
  getData() {
    this.categorySV.getOneCategory(this.id).subscribe(
      (response: any) => {
        this.dataOld = response.category;
        this.schemaForm = new FormGroup({
          name: new FormControl(this.dataOld.name, [
            Validators.required,
            Validators.minLength(3),
          ]),
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.categorySV.getCategory().subscribe(
      (response: any) => {
        this.dataCategory = response.category;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  schemaForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  // ngOnInit(): void {}
  get name() {
    return this.schemaForm.get('name');
  }
  onSubmit() {
    if (this.schemaForm.status !== 'VALID') return;
    // console.log(this.schemaForm.value);
    // Check name exists
    if (!CateCheckName(this.dataCategory, String(this.schemaForm.value.name))) {
      alert('Danh mục đã tồn tại');
      return;
    }
    const token = JSON.parse(String(localStorage.getItem('user'))).accessToken;
    this.categorySV
      .updateCategory(this.id, this.schemaForm.value, token)
      .subscribe(
        (response: any) => {
          if (response.category == null) {
            setTimeout(() => {
              this.notificationPro = 2;
              setTimeout(() => {
                // window.location.href = '/admin/category/';
                this.router.navigateByUrl('/admin/category');
              }, 1200);
            }, 1800);
            return;
          }
          this.notificationPro = 1;
          setTimeout(() => {
            this.notificationPro = 0;
            window.location.reload();
          }, 1200);
          // console.log(response);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.extractValueFromUrl();
      }
    });
  }

  private extractValueFromUrl(): void {
    const url: any = this.route.url;
    this.id = url._value[0].path;
    this.getData();
  }
}
