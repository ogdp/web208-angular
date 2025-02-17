import { Component } from '@angular/core';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
  URL: string = '';
  checkPermission: boolean = false;
  constructor(private signinSV: SigninServiceService, private router: Router) {
    this.URL = environment.API;
    const checkLoged = localStorage.getItem('user');
    if (
      !localStorage.getItem('user') ||
      localStorage.getItem('user') == '' ||
      !JSON.parse(String(checkLoged)).accessToken
    ) {
      this.checkPermission = false;
      // window.location.href = 'http://localhost:4200/auth';
      // this.router.navigate(['/auth']);
      this.router.navigateByUrl('/auth');
      alert('Bạn chưa đăng nhập');
      return;
    }
    if (JSON.parse(String(checkLoged)).accessToken) {
      const url = `${this.URL}/verifyToken/${
        JSON.parse(String(checkLoged)).accessToken
      }`;
      this.signinSV.verifyToken(url).subscribe(
        (data: any) => {
          // console.log(data);
          this.checkPermission = false;
          if (data.message !== 'account admin') {
            console.log('Khác admin');
            this.checkPermission = false;
            // window.location.href = 'http://localhost:4200';
            // this.router.navigate(['/']);
            this.router.navigateByUrl('/');
            alert('Bạn không đủ quyền');
          } else {
            this.checkPermission = true;
          }
          // console.log('Admin');
          // console.log(this.checkPermission);
        },
        (error: any) => {
          // console.log('Khác admin');
          this.checkPermission = false;
          // window.location.href = 'http://localhost:4200';
          // this.router.navigate(['/']);
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
