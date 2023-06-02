import { Component } from '@angular/core';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styleUrls: ['./list-product-admin.component.css'],
})
export class ListProductAdminComponent {
  products: any;
  notificationPro: number = 0;
  constructor(
    private productSV: ProductServiceService,
    private signinSV: SigninServiceService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Quản lý sản phẩm');
    this.refreshData();
  }
  refreshData = () => {
    this.productSV.getProduct().subscribe((data: any) => {
      this.products = data.product.docs;
    });
  };
  onHandleRemoveProduct(id: string) {
    if (confirm('Bạn có chắc chắn xoá không ?') == false) return;
    const checkLoged = localStorage.getItem('user');
    if (
      !localStorage.getItem('user') ||
      localStorage.getItem('user') == '' ||
      !JSON.parse(String(checkLoged)).accessToken
    ) {
      alert('Đăng nhập để tiếp tục');
      window.location.reload();
      return;
    }
    // if (JSON.parse(String(checkLoged)).accessToken) {
    //   console.log(JSON.parse(String(checkLoged)).accessToken);
    // }
    this.productSV
      .removeProduct(String(id), JSON.parse(String(checkLoged)).accessToken)
      .subscribe(
        (data: any) => {
          this.notificationPro = 1;
          setTimeout(() => {
            this.notificationPro = 0;
          }, 1200);
          return this.refreshData();
        },
        (err: any) => {
          console.log(err);
          try {
          } catch (error) {
            console.log('Có lỗi rồi', error);
          }
          window.location.reload();
        }
      );
  }
  formatMoney(amount: any) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
