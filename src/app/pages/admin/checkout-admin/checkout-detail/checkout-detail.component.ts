import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BillServiceService } from 'src/app/service/bill/bill-service.service';
import { IBill } from 'src/common/Bill';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.css'],
})
export class CheckoutDetailComponent {
  dataBill: IBill | any = {} || undefined;
  constructor(
    private router: ActivatedRoute,
    private billSV: BillServiceService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Chi tiết đơn hàng');
    const value_Url: any = this.router.url;
    this.getOneBill(String(value_Url._value[2].path));
  }
  getOneBill(id: string) {
    this.billSV.getOneBill(id).subscribe(
      (response: any) => {
        this.dataBill = response.bill;
        console.log(this.dataBill);
      },
      (err: any) => {
        this.dataBill = undefined;
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
