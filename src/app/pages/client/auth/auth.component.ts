import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninServiceService } from 'src/app/service/auth/signin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isMatch: boolean = false;
  notification: number = 0;
  showSignup() {
    this.isMatch = !this.isMatch;
    // console.log(this.isMatch);
  }
  //
  ngOnInit(): void {}
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
    ]),
  });
  get email() {
    return this.signinForm.get('email');
  }
  get password() {
    return this.signinForm.get('password');
  }
  error_Password = [
    '*Mật khẩu không được bỏ trống',
    '*Mật khẩu tối thiểu 6 ký tự',
    '*Mật khẩu tối đa 32 ký tự',
  ];
  error_Email = ['*Email không được bỏ trống', '*Email không đúng định dạng'];
  erEmail: boolean = false;
  erPassword: boolean = false;
  constructor(private signinSV: SigninServiceService, private router: Router) {}

  signin() {
    if (this.signinForm.value.email == '') {
      this.erEmail = true;
    } else {
      this.erEmail = false;
    }
    if (this.signinForm.value.password == '') {
      this.erPassword = true;
    } else {
      this.erPassword = false;
    }
    if (this.signinForm.status !== 'VALID') return console.log('Form lỗi nhé');
    // console.log(this.signinForm.value);
    // console.log('Thành công');

    const url = 'http://localhost:8080/api/signin';
    this.signinSV.signinLogic(url, this.signinForm.value).subscribe(
      (data: any) => {
        this.notification = 1;
        setTimeout(() => {
          this.notification = 0;
          this.router.navigate(['/']);
        }, 1200);
        localStorage.setItem('user', '');
        localStorage.setItem('user', JSON.stringify(data));
      },
      (error: any) => {
        try {
          throw error;
        } catch (error) {
          this.notification = 2;
          setTimeout(() => {
            this.notification = 0;
          }, 1200);
          localStorage.setItem('user', '');
          // console.log('Lỗi xảy ra:', error);
        }
      }
    );
  }

  // // Signin
  // user = {
  //   email: '',
  //   password: '',
  //   save_signin: false,
  // };
  // // Erorr signin
  // errorSignin = {
  //   email: null,
  //   password: null,
  // };
  // onSignin() {
  //   console.log(this.user);
  //   console.log(this.errorSignin);
  // }

  // Signup

  signupForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
    ]),
    email_su: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('(03|05|07|08|09)+([0-9]{8})'),
    ]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [
      Validators.minLength(10),
      Validators.required,
    ]),
    password_su: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
    ]),
  });

  get fullname() {
    return this.signupForm.get('fullname');
  }
  get email_su() {
    return this.signupForm.get('email_su');
  }
  get address() {
    return this.signupForm.get('address');
  }
  get password_su() {
    return this.signupForm.get('password_su');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  get phone() {
    return this.signupForm.get('phone');
  }

  error_Fullname = ['*Họ tên không được để trống', '*Họ tên tối thiểu 5 ký tự'];

  error_Email_su = [
    '*Email không được bỏ trống',
    '*Email không đúng đinh dạng',
  ];

  error_Phone = ['*Số điện thoại không được bỏ trống', '*Sai định dạng'];

  error_Address = [
    '*Địa chỉ không được bỏ trống',
    '*Địa chỉ tối thiểu 10 ký tụ',
  ];

  error_Password_su = [
    '*Mật khẩu không được bỏ trống',
    '*Mật khẩu tối thiểu 6 ký tự',
    '*Mật khẩu tối đa 32 ký tự',
  ];
  error_confirmPassword = [
    '*Mật khẩu không được bỏ trống',
    '*Mật khẩu tối thiểu 6 ký tự',
    '*Mật khẩu tối đa 32 ký tự',
  ];

  // validateConfirmPassword(): void {
  //   const passwordControl = this.signupForm.get('password_su');
  //   const confirmPasswordControl = this.signupForm.get('confirmPassword');

  //   if (passwordControl && confirmPasswordControl) {
  //     const password = passwordControl.value;
  //     const confirmPassword = confirmPasswordControl.value;

  //     if (password !== confirmPassword) {
  //       confirmPasswordControl.setErrors({ mismatch: true });
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //     }
  //   }
  // }

  erFullname: boolean = false;
  erEmail_su: boolean = false;
  erPhone: boolean = false;
  erAddress: boolean = false;
  erPassword_su: boolean = false;
  erConfirmPassword: boolean = false;
  signup() {
    if (this.signupForm.value.fullname == '') {
      this.erFullname = true;
    } else {
      this.erFullname = false;
    }
    if (this.signupForm.value.email_su == '') {
      this.erEmail_su = true;
    } else {
      this.erEmail_su = false;
    }
    if (this.signupForm.value.password_su == '') {
      this.erPassword_su = true;
    } else {
      this.erPassword_su = false;
    }
    if (this.signupForm.value.phone == '') {
      this.erPhone = true;
    } else {
      this.erPhone = false;
    }
    if (this.signupForm.value.address == '') {
      this.erAddress = true;
    } else {
      this.erAddress = false;
    }
    if (this.signupForm.value.confirmPassword == '') {
      this.erConfirmPassword = true;
    } else {
      this.erConfirmPassword = false;
    }
    console.log(this.signupForm.value);
    // if (this.signupForm.status !== 'VALID') return console.log('Form lỗi nhé');
    console.log('Thành công');
  }
}
