import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { CartServiceService } from 'src/app/service/cart/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() receivedData: any;
  sumPrice: number = 0;
  public listCart: any;
  checkPermission = false;
  ngOnChanges(changes: SimpleChanges) {
    this.sumPrice = 0;
    this.listCart = this.receivedData.cart;
    this.listCart?.forEach((item: any, index: number) => {
      this.sumPrice = this.sumPrice + item.price * item.quantity;
    });
  }
  constructor(
    private cartSV: CartServiceService,
    private signinSV: SigninServiceService,
    private router: Router
  ) {}
  removeCart(id: string) {
    this.cartSV.removeCart(id).subscribe(
      (response: any) => {
        this.listCart.forEach((item: any) => {
          if (item._id == id) {
            const updatePrice = item.price * item.quantity;
            this.sumPrice = this.sumPrice - updatePrice;
          }
        });
        this.listCart = this.listCart.filter((item: any) => item._id !== id);
      },
      (err: any) => {
        console.log(err);
      }
    );
    // console.log(this.listCart);
  }
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  // Check người dùng đã đăng nhập chưa
  onHandleCheckout() {
    const checkLoged = localStorage.getItem('user');
    if (
      !localStorage.getItem('user') ||
      localStorage.getItem('user') == '' ||
      !JSON.parse(String(checkLoged)).accessToken
    ) {
      this.checkPermission = false;
      this.router.navigateByUrl('/auth');
      // window.location.href = 'http://localhost:4200/auth';
      alert('Bạn chưa đăng nhập');
      return;
    }
    if (JSON.parse(String(checkLoged)).accessToken) {
      const url = `https://api-poly-framework-1.onrender.com/api/verifyToken/${
        JSON.parse(String(checkLoged)).accessToken
      }`;
      this.signinSV.verifyToken(url).subscribe(
        (data: any) => {
          // console.log(data);
          this.checkPermission = false;
          if (
            data.message == 'account admin' ||
            data.message == 'account member'
          ) {
            const cart = document.getElementById('cart');
            cart?.classList.toggle('hidden');
            this.checkPermission = true;
            this.router.navigate(['/checkout']);
          } else {
            this.checkPermission = false;
            // window.location.href = 'http://localhost:4200/auth';
            this.router.navigateByUrl('/auth');
            alert('Đăng nhập để thanh toán');
            return;
          }
        },
        (error: any) => {
          this.checkPermission = false;
          // window.location.href = 'http://localhost:4200';
          this.router.navigateByUrl('/');
          alert('Bạn không đủ quyền');
          try {
            throw error;
          } catch (error) {
            console.log('Lỗi xảy ra:', error);
          }
        }
      );
    }
  }
}
