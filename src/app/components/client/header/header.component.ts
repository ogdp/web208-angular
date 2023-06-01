import { Component, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // constructor(private titleService: Title) {
  //   this.titleService.setTitle('Sản phẩm');
  // }

  isShowMenu: boolean = false;
  isShowProfile: boolean = false;
  isMathGuest: boolean = false;
  notification: number = 0;
  menuMobile(event1: any) {
    this.isShowMenu = !this.isShowMenu;
  }
  constructor(
    private verifyToken: SigninServiceService,
    private router: Router
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
          console.log(data);
        },
        (error: any) => {
          this.isMathGuest = true;
          try {
            throw error;
          } catch (error) {
            console.log('Lỗi xảy ra:', error);
          }
        }
      );
    }
  }

  classToggled: boolean = false;

  showCart() {
    const cart = document.getElementById('cart');
    cart?.classList.toggle('hidden');
    console.log('aaa');
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
