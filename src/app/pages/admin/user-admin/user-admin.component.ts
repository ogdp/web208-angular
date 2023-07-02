import { Component } from '@angular/core';
import { UserService } from 'src/app/service/users/user.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent {
  users: any;
  isDisabled = true;
  notificationPro: number = 0;
  token = JSON.parse(String(localStorage.getItem('user'))).accessToken;
  constructor(private getUsers: UserService) {
    this.getUsers.getUsers(this.token).subscribe((data: any) => {
      console.log(data);
      this.users = data.users;
    });
  }

  refreshData = () => {
    this.getUsers.getUsers(this.token).subscribe((data: any) => {
      this.users = data.users;
    });
  };

  deactive(id: string) {
    if (confirm('Bạn có chắc chắn muốn vô hiệu tài khoản này không ?') == false)
      return;
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

    const deactive = {
      role: 'disabled',
    };

    this.getUsers.updateUserRole(String(id), deactive, this.token).subscribe(
      (data: any) => {
        this.notificationPro = 1;
        setTimeout(() => {
          this.notificationPro = 0;
        }, 2000);
        return this.refreshData();
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      },
      (err: any) => {
        console.log(err);
        try {
        } catch (error) {
          console.log('Có lỗi rồi', error);
        }
        // window.location.reload();
      }
    );
  }

  async resetPassword(id: string) {
    if (
      confirm('Bạn có chắc chắn muốn reset mật khẩu của tài khoản này ?') ==
      false
    )
      return;
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
    const bcryptPassword = await bcrypt.hash('123456', 10);
    console.log(bcryptPassword);
    const resetPassword = {
      password: bcryptPassword,
    };

    this.getUsers
      .updateUserPassword(String(id), resetPassword, this.token)
      .subscribe(
        (data: any) => {
          this.notificationPro = 2;
          setTimeout(() => {
            this.notificationPro = 0;
          }, 1200);
          return this.refreshData();
          window.location.reload();
        },
        (err: any) => {
          console.log(err);
          try {
          } catch (error) {
            console.log('Có lỗi rồi', error);
          }
          // window.location.reload();
        }
      );
  }
}
