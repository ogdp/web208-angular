import { Component, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart/cart-service.service';
import axios from 'axios';
import { environment } from 'src/environments/environment';
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
  user: any;
  URL: string = '';
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
    this.URL = environment.API;
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
      const url = `${this.URL}/verifyToken/${
        JSON.parse(String(checkLoged)).accessToken
      }`;
      this.verifyToken.verifyToken(url).subscribe(
        (data: any) => {
          this.isMathGuest = false;
          this.user = data.user;
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
