import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillServiceService } from 'src/app/service/bill/bill-service.service';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css'],
})
export class CheckoutSuccessComponent {
  dataBill: any;
  id: string = '';
  shiperPrice: number = 30000;
  constructor(
    private billSV: BillServiceService,
    private route: ActivatedRoute
  ) {
    const params_id: any = route.params;
    const { id } = params_id._value;
    this.id = id;
    this.billSV.getOneBill(String(this.id)).subscribe(
      (response: any) => {
        // console.log(response);
        this.dataBill = response.bill;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
