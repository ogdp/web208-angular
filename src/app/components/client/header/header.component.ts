import { Component, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart/cart-service.service';
import axios from 'axios';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isShowMenu: boolean = false;
  isShowProfile: boolean = false;
  isMathGuest: boolean = false;
  notification: number = 0;
  public cartData: any = '';
  isLoadding: boolean = false;
  menuMobile(event1: any) {
    this.isShowMenu = !this.isShowMenu;
  }
  constructor(
    private verifyToken: SigninServiceService,
    private router: Router,
    private cartSV: CartServiceService
  ) {
    const checkLoged = localStorage.getItem('user');
    if (
      !localStorage.getItem('user') ||
      localStorage.getItem('user') == '' ||
      !JSON.parse(String(checkLoged)).accessToken
    ) {
      this.isMathGuest = true;
      return;
    }
    if (JSON.parse(String(checkLoged)).accessToken) {
      const url = `http://localhost:8080/api/verifyToken/${
        JSON.parse(String(checkLoged)).accessToken
      }`;
      this.verifyToken.verifyToken(url).subscribe(
        (data: any) => {
          this.isMathGuest = false;
          // console.log(data);
        },
        (error: any) => {
          this.isMathGuest = true;
          try {
            throw error;
          } catch (error) {
            // console.log('Lỗi xảy ra:', error);
          }
        }
      );
    }
  }

  classToggledCart: boolean = false;
  showCart() {
    if (this.classToggledCart == false) {
      this.isLoadding = true;
      (async () => {
        try {
          const { data }: any = await axios.get(
            'https://api.ipify.org/?format=json'
          );
          const userAgent = navigator.userAgent;
          const deviceDetail = {
            ip: data.ip,
            userAgent: String(userAgent),
          };
          const encode64 = btoa(JSON.stringify(deviceDetail));
          this.cartSV.getDeviceCart(encode64).subscribe(
            (response: any) => {
              this.cartData = response;
              const cart = document.getElementById('cart');
              cart?.classList.toggle('hidden');
              this.isLoadding = false;
            },
            (err: any) => {
              console.log(err);
            }
          );
        } catch (error) {
          console.log(error);
          this.isLoadding = false;
        }
      })();
      this.classToggledCart = true;
    } else {
      const cart = document.getElementById('cart');
      cart?.classList.toggle('hidden');
      this.classToggledCart = false;
    }
  }
  showSearch() {
    const search = document.getElementById('search');
    search?.classList.toggle('hidden');
    console.log('aaa');
  }
  checkAccount() {
    this.isMathGuest = false;
    this.isShowProfile = !this.isShowProfile;
  }
  logoutAccount() {
    localStorage.setItem('user', '');
    this.notification = 1;
    setTimeout(() => {
      this.notification = 0;
      this.router.navigate(['/']);
      window.location.reload();
    }, 1000);
  }
}
