import { Component } from '@angular/core';
import { BillServiceService } from 'src/app/service/bill/bill-service.service';
import { IBill } from 'src/common/Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent {
  dataBill: IBill[] = [] || undefined;
  constructor(private billSV: BillServiceService) {
    this.getDataBill();
  }
  getDataBill() {
    const getUsers: any = localStorage.getItem('user');
    const uid = JSON.parse(getUsers).user._id;
    this.billSV.getBillFollowUid(uid).subscribe(
      (response: any) => {
        this.dataBill = response.bill.docs;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  billCancel(id: string) {
    if (!confirm('Bạn có chắn chắn huỷ đơn khum ?')) return;
    const getUsers: any = localStorage.getItem('user');
    const token = JSON.parse(getUsers).accessToken;
    this.billSV
      .updateStatusBill(id, token, { status: 'cancellation' })
      .subscribe(
        (response: any) => {
          this.getDataBill();
        },
        (err: any) => {
          console.log(err);
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
}
