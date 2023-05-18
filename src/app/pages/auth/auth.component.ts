import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isMatch: boolean = false;
  showSignup() {
    this.isMatch = !this.isMatch;
    console.log(this.isMatch);
  }
  //
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
  ngOnInit(): void {}
  error_Password = [
    '*Mật khẩu không được bỏ trống',
    '*Mật khẩu tối thiểu 6 ký tự',
    '*Mật khẩu tối đa 32 ký tự',
  ];
  error_Email = ['*Email không được bỏ trống', '*Email không đúng định dạng'];
  erEmail: boolean = false;
  erPassword: boolean = false;
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
    console.log('Thành công');
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
    name: new FormControl('', [Validators.min(5), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('(03|05|07|08|09)+([0-9]{8})'),
    ]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.min(10), Validators.required]),
    password: new FormControl('', [
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
  signup() {
    console.log('Đăng ký');
  }
}
