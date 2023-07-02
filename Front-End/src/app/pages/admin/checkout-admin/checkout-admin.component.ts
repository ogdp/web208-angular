import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BillServiceService } from 'src/app/service/bill/bill-service.service';
import { IBill } from 'src/common/Bill';

@Component({
  selector: 'app-checkout-admin',
  templateUrl: './checkout-admin.component.html',
  styleUrls: ['./checkout-admin.component.css'],
})
export class CheckoutAdminComponent {
  token: string | any = '' || null;
  dataBill: IBill[] = [] || undefined;
  totalPage: number[] = [];
  activeButtonPage: number = 1;
  prevPage: number | null = null;
  nextPage: number | null = null;
  nowPage: number | null = null;
  constructor(
    private billSV: BillServiceService,
    private params: ActivatedRoute,
    private titleService: Title
  ) {
    this.titleService.setTitle('Quản lý đơn hàng');
    const getUsers: any = localStorage.getItem('user');
    this.token = JSON.parse(getUsers).accessToken;
    this.getAllBill();
  }
  getAllBill() {
    this.billSV.getAllBill(this.token).subscribe(
      (response: any) => {
        this.dataBill = response.bill.docs;
        this.prevPage = response.bill.prevPage;
        this.nextPage = response.bill.nextPage;
        this.nowPage = response.bill.page;
      },
      (err: any) => {
        alert('Bạn chưa đăng nhập');
        console.log(err);
      }
    );
  }
  onHandleStatus(eventNe: any, id: string) {
    this.SendStatus(id, String(eventNe.target.value));
  }
  SendStatus(id: string, status: string) {
    const checkToken = String(this.token);
    this.billSV
      .updateStatusBill(id, String(checkToken), { status: status })
      .subscribe(
        (response: any) => {
          // this.getAllBill();
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  getBillFollowStatus(key_status: string) {
    const checkToken = String(this.token);
    this.billSV.getBillFollowStatus(key_status, String(checkToken)).subscribe(
      (response: any) => {
        this.dataBill = response.bill.docs;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  formSearchData = new FormGroup({
    status: new FormControl('no', [Validators.required]),
    keyword: new FormControl('', [Validators.required]),
  });
  searchName() {
    if (this.formSearchData.status !== 'VALID') return;
    const checkToken = String(this.token);
    this.billSV
      .getSearchNameFollowStatus(
        String(this.formSearchData.value.status),
        String(this.formSearchData.value.keyword),
        String(checkToken)
      )
      .subscribe(
        (response: any) => {
          this.dataBill = response.bill.docs;
        },
        (err: any) => {
          this.dataBill = [];
        }
      );
  }
  formatMoney(amount: any) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  formatDate(value: any) {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().padStart(4, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  }
  onHandlePage(value: number) {
    this.billSV.getAllBillPage(Number(value), this.token).subscribe(
      (response: any) => {
        this.dataBill = response.bill.docs;
        this.prevPage = response.bill.prevPage;
        this.nextPage = response.bill.nextPage;
        this.nowPage = response.bill.page;
        this.activeButtonPage = response.bill.page;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
