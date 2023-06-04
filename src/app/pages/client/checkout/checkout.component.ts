import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart/cart-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillServiceService } from 'src/app/service/bill/bill-service.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  isLoadding: boolean = false;
  notification: number = 0;
  dataCart: any;
  sumPrice: number = 0;
  shiperPrice: number = 30000;
  parentSumPrice: number = 0;
  dataBill: any;
  defaultValue: any;
  token: string = '';
  constructor(
    private cartSV: CartServiceService,
    private router: Router,
    private billSV: BillServiceService
  ) {
    const getCartToken = (): string | null => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('cart_token=')) {
          const value = cookie.substring('cart_token='.length);
          return value;
        }
      }
      return null;
    };
    this.cartSV.getDeviceCart(String(getCartToken())).subscribe(
      (response: any) => {
        this.dataCart = response.cart;
        this.dataCart?.forEach((item: any, index: number) => {
          this.sumPrice = this.sumPrice + item.price * item.quantity;
        });
        this.parentSumPrice = this.sumPrice + this.shiperPrice;
        setInfoUser();
      },
      (err: any) => {
        console.log(err);
      }
    );
    const setInfoUser = () => {
      const user: any = localStorage.getItem('user');
      // Default user
      this.defaultValue = JSON.parse(user).user;
      this.token = JSON.parse(user).accessToken;

      this.defaultValue.user_id = JSON.parse(user).user._id;

      this.defaultValue.cart_id = this.dataCart.map((item: any) => {
        return { id: item._id, quantity: item.quantity };
      });
      this.defaultValue.note = '';
      this.defaultValue.price = this.parentSumPrice;
      delete this.defaultValue.createdAt;
      delete this.defaultValue.gender;
      delete this.defaultValue.role;
      delete this.defaultValue.email;
      delete this.defaultValue.updatedAt;
      delete this.defaultValue._id;
      this.billForm = new FormGroup({
        name: new FormControl(this.defaultValue.name, Validators.required),
        address: new FormControl(
          this.defaultValue.address,
          Validators.required
        ),
        tel: new FormControl(this.defaultValue.tel, Validators.required),
        note: new FormControl(''),
      });
    };
  }
  ngOnChanges() {
    this.dataBill = 'khong co';
    console.log(this.dataBill);
    console.log(localStorage.getItem('user'));
  }
  billForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    tel: new FormControl(''),
    note: new FormControl(''),
  });
  onSubmit() {
    if (this.billForm.status !== 'VALID') return console.log('Fail');
    this.defaultValue.name = this.billForm.value.name;
    this.defaultValue.address = this.billForm.value.address;
    this.defaultValue.tel = this.billForm.value.tel;
    this.defaultValue.note = this.billForm.value.note;
    this.isLoadding = true;
    this.billSV.addToBill(this.defaultValue, this.token).subscribe(
      (response: any) => {
        // console.log(response);
        this.isLoadding = false;
        this.notification = 1;
        setTimeout(() => {
          this.notification = 0;
          this.router.navigate([`checkouts/${response.bill._id}/thank_you`]);
        }, 1200);
      },
      (err: any) => {
        console.log(err);
        this.isLoadding = false;
      }
    );
    // console.log(this.defaultValue);
  }
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
